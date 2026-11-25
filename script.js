document.addEventListener('DOMContentLoaded', function() {
    renderProjects();
    setupModal();
});

function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = '';

    projects.forEach((project, index) => {
        const card = createProjectCard(project, index);
        projectsGrid.appendChild(card);
    });
}

function createProjectCard(project, index) {
    const card = document.createElement('div');
    card.className = `project-card round${project.round}`;
    card.onclick = () => openModal(project);

    card.innerHTML = `
        <div class="card-header">
            <span class="card-emoji">${project.emoji}</span>
            <span class="card-round">${project.round}회차</span>
        </div>
        <h3 class="card-title">${project.title}</h3>
        <p class="card-summary">${project.summary}</p>
        <div class="card-tech">
            ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
    `;

    return card;
}

function openModal(project) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = createModalContent(project);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function createModalContent(project) {
    return `
        <div class="detail-section">
            <div class="detail-section-title">📖 프로젝트 소개</div>
            <div class="detail-content">${project.intro}</div>
        </div>

        <div class="detail-section">
            <div class="detail-section-title">🎯 만든 이유</div>
            <div class="detail-content">${project.reason}</div>
        </div>

        ${project.image && !project.image.includes('project') ? '' : `
        <div class="detail-section">
            <div class="detail-section-title">📷 실행 화면</div>
            <img src="${project.image}" alt="${project.title}" class="detail-image" onerror="this.style.display='none'">
        </div>
        `}

        <div class="detail-section">
            <div class="detail-section-title">✨ 주요 기능</div>
            <ul class="detail-features">
                ${project.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
        </div>

        <div class="detail-section">
            <div class="detail-section-title">🧠 배운 점</div>
            <div class="detail-content">${project.learned}</div>
        </div>

        <div class="detail-section">
            <div class="detail-section-title">💡 회고</div>
            <div class="retro-section">
                <div class="retro-item">
                    <div class="retro-label">✅ 잘 된 점</div>
                    <div class="retro-text">${project.retro.good}</div>
                </div>
                <div class="retro-item">
                    <div class="retro-label">🤔 아쉬운 점</div>
                    <div class="retro-text">${project.retro.bad}</div>
                </div>
            </div>
        </div>

        <div class="modal-buttons">
            <a href="${project.appUrl}" target="_blank" class="btn btn-app">▶ 앱 실행하기</a>
            <a href="${project.githubUrl}" target="_blank" class="btn btn-github">GitHub 코드 보기</a>
        </div>
    `;
}

function setupModal() {
    const modal = document.getElementById('projectModal');
    const closeBtn = document.getElementById('closeBtn');

    closeBtn.onclick = closeModal;

    // 모달 외부 클릭 시 닫기
    window.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    };

    // ESC 키로 닫기
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
}
