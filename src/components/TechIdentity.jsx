export default function TechIdentity({ identity }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8">
      {/* 헤더 */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-sky-500 rounded-xl flex items-center justify-center">
          <i className="ri-fingerprint-line text-white text-2xl"></i>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">
            Step 4. 기술 정체성 분석
          </h3>
          <p className="text-sm text-gray-600">
            당신의 아이디어가 어떤 기술인지 한 문장으로 정의합니다
          </p>
        </div>
      </div>

      {/* 메인 설명 박스 */}
      <div className="bg-gradient-to-br from-indigo-50 to-sky-50 rounded-xl p-6 border border-indigo-100">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
            <i className="ri-bookmark-line text-indigo-600 text-xl"></i>
          </div>
          <p className="text-gray-800 leading-relaxed text-base flex-1">
            {identity}
          </p>
        </div>
      </div>

      {/* 3개 정보 카드 */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
          <div className="flex items-center gap-2 mb-2">
            <i className="ri-stack-line text-indigo-600 text-lg"></i>
            <h4 className="font-bold text-sm text-gray-900">기술 분야</h4>
          </div>
          <p className="text-sm text-gray-700">
            엣지 AI 컴퓨팅
            <br />
            모바일 비전 AI
          </p>
        </div>

        <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
          <div className="flex items-center gap-2 mb-2">
            <i className="ri-cpu-line text-indigo-600 text-lg"></i>
            <h4 className="font-bold text-sm text-gray-900">핵심 기술</h4>
          </div>
          <p className="text-sm text-gray-700">
            딥러닝 추론
            <br />
            실시간 영상 분석
          </p>
        </div>

        <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
          <div className="flex items-center gap-2 mb-2">
            <i className="ri-focus-3-line text-indigo-600 text-lg"></i>
            <h4 className="font-bold text-sm text-gray-900">응용 영역</h4>
          </div>
          <p className="text-sm text-gray-700">
            모바일 디바이스
            <br />
            카메라 센서
          </p>
        </div>
      </div>

      {/* 완료/버튼 영역 */}
      <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <i className="ri-check-double-line text-emerald-500 text-xl"></i>
          <span className="font-bold text-gray-900">분석 완료</span>
        </div>
        <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-bold whitespace-nowrap cursor-pointer transition-all text-sm">
          <i className="ri-download-line mr-2"></i>
          리포트 다운로드
        </button>
      </div>
    </div>
  );
}
