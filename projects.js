const projects = [
    {
        round: 2,
        emoji: "💕",
        title: "내 취향은 누구지?",
        summary: "내 성격과 기분을 고르면 AI가 나와 잘 맞는 사람 유형을 추천해 주는 앱",
        tech: ["Python", "Streamlit", "AI"],
        intro: "자신의 성격 특성과 현재 기분을 선택하면 AI가 나에게 잘 맞는 사람의 특성을 추천해주는 애플리케이션입니다. 성격 분석을 통해 인간관계에 도움이 될 수 있는 인사이트를 제공합니다.",
        reason: "친구와의 관계, 나와 맞는 사람이 어떤 유형인지 궁금해서 만들게 되었습니다.",
        features: [
            "성격 선택: 밝고 긍정적 / 침착하고 차분 / 감정적이고 감수성 있음 / 재미있고 활발함 / 차갑고 논리적",
            "기분 선택 후 AI 추천 결과 보기",
            "핑크 그라데이션 배경 + 하트가 떨어지는 애니메이션"
        ],
        learned: "AI를 활용해서 성격 분석 프로그램을 만들 수 있다는 것을 알게 되었습니다.",
        retro: {
            good: "핑크 테마로 예쁘게 꾸며서 사용하기 편합니다.",
            bad: "결과 화면이 조금 더 자세할 수 있으면 좋을 것 같습니다."
        },
        image: "images/project2.png",
        appUrl: "https://what-is-my-love-bvx6utuxwtl6c2fnxmen98.streamlit.app/",
        githubUrl: "https://github.com/Jeffrey-void/what-is-my-love"
    },
    {
        round: 3,
        emoji: "📶",
        title: "전국 공공 와이파이 찾기",
        summary: "전국에 있는 와이파이의 위치를 알려주는 앱",
        tech: ["Python", "Streamlit", "pandas"],
        intro: "전국에 있는 공공 와이파이의 위치를 지도에서 찾을 수 있는 애플리케이션입니다. 현재 위치에서 원하는 거리 범위 내의 와이파이를 검색하고, 거리 순서대로 정렬해서 가장 가까운 와이파이부터 찾을 수 있습니다.",
        reason: "밖에 나와 데이터가 다 떨어졌을 때 불편하지 않도록 하기 위해서입니다.",
        features: [
            "위도/경도와 검색 반경(1~50km)을 입력하면 가까운 공공 와이파이 검색",
            "거리 계산(하버사인 공식)으로 가까운 순 정렬",
            "결과를 색깔 카드로 표시: 🟢 가장 가까운 곳 / 🔵 무료 / 🔴 비밀번호 필요"
        ],
        learned: "넓은 반경의 데이터까지 확인할 수 있다는 것을 알게 되었습니다.",
        retro: {
            good: "GPS 좌표를 입력하면 쉽게 와이파이를 찾을 수 있습니다.",
            bad: "검색 결과가 너무 많으면 화면이 복잡해질 수 있습니다."
        },
        image: "images/project3.png",
        appUrl: "https://free-wifi-jmtcmyvi2s7scbbtjsbved.streamlit.app/",
        githubUrl: "https://github.com/Jeffrey-void/free-wifi"
    },
    {
        round: 4,
        emoji: "✍️",
        title: "글쓰기 코치",
        summary: "자신이 쓴 글을 AI가 검토하고 피드백을 주는 앱",
        tech: ["Python", "Streamlit", "AI"],
        intro: "자신이 쓴 글을 AI에게 검토받을 수 있는 애플리케이션입니다. 글의 장르와 쓴 목적을 함께 입력하면, AI가 문법, 표현, 논리성 등을 분석해서 상세한 피드백과 수정된 글을 제공합니다.",
        reason: "자신이 쓴 글이 맞는 글인지 의문이 들어서, 객관적인 피드백을 받고 싶었습니다.",
        features: [
            "글/장르/의도 입력하면 AI 피드백 + 수정된 글 제공",
            "최근 분석 기록(최대 20개) 저장하고 다시 보기/삭제 가능",
            "부드러운 UI로 쉽게 사용 가능"
        ],
        learned: "AI가 내 글을 평가할 수 있다는 것을 알게 되었습니다. 사람뿐만 아니라 AI도 훌륭한 선생님이 될 수 있다는 점이 신기했습니다.",
        retro: {
            good: "피드백을 정확하고 도움이 되게 해 줍니다.",
            bad: "설명이 너무 자세해서 한눈에 보기 힘들 때가 있습니다."
        },
        image: "images/project4.png",
        appUrl: "https://m4becgvbp2cygxkjvpndfht.streamlit.app/",
        githubUrl: "https://github.com/Jeffrey-void/-writing-coach-remake-app"
    },
    {
        round: 5,
        emoji: "🥗",
        title: "급식 영양 코치",
        summary: "어떤 급식을 먹어야 우리 몸에 건강할지 알려주는 앱",
        tech: ["Python", "Streamlit", "OpenAI API"],
        intro: "NEIS API를 활용해 전국의 학교 급식 정보를 조회하고, AI가 영양학적으로 평가해주는 애플리케이션입니다. 자신이 다니는 학교의 급식 메뉴를 확인하고, 어떤 음식이 건강한지 AI 판단을 받을 수 있습니다.",
        reason: "어떤 급식 메뉴들이 건강한 것인지 알아보기 위해서, 그리고 균형 잡힌 식단을 선택할 수 있도록 하기 위해서입니다.",
        features: [
            "전국 시/도 선택 → 학교 검색 및 선택",
            "NEIS API로 주간 급식표(월~금) 조회, 칼로리/영양 정보 표시",
            "급식 메뉴 중 건강한 음식 자동 찾기 및 AI 추천"
        ],
        learned: "공공 데이터 API를 활용해서 실제로 쓸 수 있는 애플리케이션을 만들 수 있다는 것을 배웠습니다.",
        retro: {
            good: "NEIS API에서 정확한 급식 정보를 불러올 수 있습니다.",
            bad: "때때로 일부 학교의 데이터가 최신이 아닐 수 있습니다."
        },
        image: "images/project5.png",
        appUrl: "https://schoolnutritioncoachapp.streamlit.app/",
        githubUrl: "https://github.com/Jeffrey-void/School_Nutrition_Coach_app"
    }
];
