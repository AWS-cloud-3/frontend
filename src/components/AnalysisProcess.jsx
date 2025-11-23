// src/components/AnalysisProcess.jsx

export default function AnalysisProcess() {
  const processSteps = [
    {
      step: "01",
      icon: "ri-key-2-line",
      title: "키워드 확장",
      desc: "기술 용어를 자동으로 확장",
      color: "from-blue-500 to-blue-600",
    },
    {
      step: "02",
      icon: "ri-file-search-line",
      title: "유사 특허 검색",
      desc: "KIPRIS에서 유사 특허 매칭",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      step: "03",
      icon: "ri-radar-line",
      title: "포지션 분석",
      desc: "유사도와 위험도를 평가",
      color: "from-purple-500 to-purple-600",
    },
    {
      step: "04",
      icon: "ri-fingerprint-line",
      title: "기술 정체성",
      desc: "핵심 기술 범주를 정의",
      color: "from-pink-500 to-pink-600",
    },
  ];

  return (
    <section className="bg-white rounded-2xl border border-gray-200 p-5 mb-12 shadow-sm overflow-hidden">
      <h3 className="text-base font-bold text-gray-900 mb-5">
        AI 분석 프로세스
      </h3>

      {/* 데스크탑: 가로 흐름 (→ → →) */}
      <div className="hidden md:flex items-stretch justify-between gap-4">
        {processSteps.map((item, index) => (
          <div
            key={item.step}
            className="flex items-center gap-4 flex-1 min-w-0"
          >
            <div className="flex-1 text-center">
              <div
                className={`w-10 h-10 mx-auto mb-3 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow`}
              >
                <i className={`${item.icon} text-white text-lg`}></i>
              </div>

              <div
                className={`inline-block px-2 py-0.5 bg-gradient-to-r ${item.color} text-white text-[10px] font-bold rounded-full mb-2`}
              >
                STEP {item.step}
              </div>

              <h4 className="text-sm font-semibold text-gray-900 mb-1">
                {item.title}
              </h4>
              <p className="text-xs text-gray-600">{item.desc}</p>
            </div>

            {/* 오른쪽 화살표 (마지막 스텝은 표시 X) */}
            {index < processSteps.length - 1 && (
              <div className="w-6 flex items-center justify-center text-gray-300">
                <i className="ri-arrow-right-line text-lg"></i>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 모바일: 세로 흐름 (⬇ ⬇ ⬇) */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {processSteps.map((item, index) => (
          <div key={item.step} className="flex flex-col items-center">
            <div className="text-center">
              <div
                className={`w-10 h-10 mx-auto mb-3 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow`}
              >
                <i className={`${item.icon} text-white text-lg`}></i>
              </div>

              <div
                className={`inline-block px-2 py-0.5 bg-gradient-to-r ${item.color} text-white text-[10px] font-bold rounded-full mb-2`}
              >
                STEP {item.step}
              </div>

              <h4 className="text-sm font-semibold text-gray-900 mb-1">
                {item.title}
              </h4>
              <p className="text-xs text-gray-600">{item.desc}</p>
            </div>

            {index < processSteps.length - 1 && (
              <div className="mt-2 text-gray-300">
                <i className="ri-arrow-down-line text-lg"></i>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
