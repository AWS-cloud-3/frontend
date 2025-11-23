export const mockData = {
  steps: {
    step1: {
      title: "전기차 배터리 열관리 기술",
      subtitle: "전기차의 배터리 성능을 최적화하는 열관리 기술을 탐색합니다",
      keywords: ["전기차", "배터리", "열관리 시스템", "온도 조절", "냉각 기술"],
      description: "이 키워드 조합으로 KIPRIS 특허 데이터베이스를 검색합니다",
    },
    step2: {
      title: "유사 특허 Top 5",
      subtitle: "Embedding 기반으로 가장 유사한 특허를 찾았습니다",
      items: [
        {
          rank: 1,
          title: "전기차 배터리 벤팅 시스템 및 그 제어 방법",
          applicantName: "주식회사 성우하이텍",
          applicationDate: "2023-12-07",
          applicationNumber: "1020230177120",
          similarity_percent: 58,
          why: [
            "전기차 배터리의 열폭주를 방지하기 위한 벤팅 시스템을 제안합니다.",
            "냉각 팬을 통해 배터리 내부의 온도를 효과적으로 조절할 수 있습니다.",
            "다단 화염노출 억제 구조를 통해 안전성을 높였습니다.",
          ],
        },
        {
          rank: 2,
          title: "전기차 폐배터리를 이용한 에너지 저장시스템",
          applicantName: "주식회사 그린우전",
          applicationDate: "2022-11-08",
          applicationNumber: "1020220148273",
          similarity_percent: 54,
          why: [
            "폐배터리의 성능을 확인하고 관리하는 시스템을 제안합니다.",
            "배터리의 용량을 확인하여 효율적인 에너지 저장을 지원합니다.",
            "배터리 성능별로 분류하여 최적의 사용을 도모합니다.",
          ],
        },
        {
          rank: 3,
          title: "전기차 화재시 배터리 자동 탈거 시스템",
          applicantName: "주식회사 호원",
          applicationDate: "2023-10-04",
          applicationNumber: "1020230131712",
          similarity_percent: 51,
          why: [
            "화재 발생 시 배터리를 자동으로 차체에서 탈거하는 시스템입니다.",
            "배터리 침수를 통한 효과적인 냉각 소화가 가능합니다.",
            "열가소성 소재를 활용하여 안전성을 강화했습니다.",
          ],
        },
        {
          rank: 4,
          title:
            "전기차 충전기의 셀 밸런싱 및 화재 예방 지원을 위한 충전 방법 및 시스템",
          applicantName: "주식회사 일렉트리",
          applicationDate: "2025-04-07",
          applicationNumber: "1020250044513",
          similarity_percent: 51,
          why: [
            "배터리 충전 시 효율성과 안전성을 높이는 시스템입니다.",
            "BMS와 연동하여 전압 편차를 줄이는 기능을 제공합니다.",
            "화재 예방을 위한 지능적인 전류 및 전압 제어가 가능합니다.",
          ],
        },
        {
          rank: 5,
          title:
            "운행 중인 전기차 배터리의 잔존수명 추정을 위한 배터리의 스트레스 팩터 스코어링 방법 및 장치",
          applicantName: "주식회사 퀀텀하이텍",
          applicationDate: "2024-04-29",
          applicationNumber: "1020240056726",
          similarity_percent: 50,
          why: [
            "운행 중 배터리의 스트레스 팩터를 평가하는 방법을 제안합니다.",
            "실시간 데이터를 기반으로 스트레스 지수를 도출합니다.",
            "AI 모델을 활용하여 배터리 성능을 정량적으로 분석합니다.",
          ],
        },
      ],
      analysis_method:
        "KIPRIS 검색 결과 중 사용자 아이디어와 각 특허 초록을 Embedding하여 코사인 유사도를 계산했습니다. 각 특허마다 AI가 유사한 이유를 3가지로 요약했습니다.",
    },
    step3: {
      title: "기술 포지션 분석",
      avg_similarity_percent: 53,
      risk_level: "낮음",
      ai_recommendation:
        "유사 특허들이 다양한 열관리 기술을 다루고 있으므로, 차별화된 기술 요소를 추가하는 것이 좋습니다.",
      diff_points: [
        "효율적인 열관리 알고리즘 개발",
        "배터리 성능 최적화를 위한 새로운 냉각 기술",
        "전기차 특성에 맞춘 맞춤형 열관리 시스템",
      ],
      avoid_points: [
        "기존 기술의 단순한 개선",
        "유사한 기술의 반복",
        "기술의 범위를 지나치게 좁히는 것",
      ],
    },
    step4: {
      title: "기술 정체성 분석",
      one_liner: "해당 아이디어는 '전기차 배터리 열관리 기술' 범주에 속합니다.",
      tech_fields: ["전기차 기술", "배터리 관리 시스템"],
      core_tech: ["열관리 시스템", "온도 조절 기술"],
      application: ["전기차", "배터리 팩"],
    },
  },

  used_documents: [
    {
      title: "전기차 배터리 벤팅 시스템 및 그 제어 방법",
      applicantName: "주식회사 성우하이텍",
      applicationDate: "20231207",
      applicationNumber: "1020230177120",
      openDate: "20250616",
      openNumber: "1020250087383",
      registerNumber: "1028894280000",
      registerStatus: "등록",
      ipcNumber:
        "H01M 50/383|H01M 50/30|H01M 10/48|H01M 10/6563|H01M 10/613|H01M 50/249",
      bigDrawing:
        "http://plus.kipris.or.kr/openapi/fileToss.jsp?arg=6c650beb4cee9ce4122b704b88878c93bd86edf6612167c5b4d9ab1b194ca99ff1c9403ebcdefe3bb4ba9e74df1e6654ee9a59d06d49adbd8664adcc709054b05c5e97068d5c8447",
      drawing:
        "http://plus.kipris.or.kr/openapi/fileToss.jsp?arg=ed43a0609e94d6e22d01c5c32ba711cfa378d2c9e1444868db30f0faa247ccac0724380e074d061541b0934eed10ea7e69bd4b2464de795ee3ae12b723d00827273fbb7ea696cf34",
      abstract: "전기차 배터리 벤팅 시스템 및 그 제어 방법이 개시된다. ...",
      rank: 1,
      similarity_score: 0.5796378,
      similarity_percent: 58,
    },
    // 나머지 4개 특허 그대로 포함
  ],

  avg_similarity_percent: 53,
  risk_level: "낮음",
};
