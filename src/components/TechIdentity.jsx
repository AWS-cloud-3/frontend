// src/components/TechIdentity.jsx

export default function TechIdentity({ identity }) {
  return (
    <div className="bg-gradient-to-br from-pink-600 to-rose-600 rounded-2xl p-8 text-white">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-white/20 backdrop-blur-lg rounded-xl flex items-center justify-center">
          <i className="ri-fingerprint-line text-white text-2xl"></i>
        </div>
        <div>
          <h3 className="text-xl font-bold">Step 4. 기술 정체성 분석</h3>
          <p className="text-sm text-pink-100">
            당신의 아이디어가 어떤 기술인지 정의합니다
          </p>
        </div>
      </div>

      {/* identity 텍스트 박스 */}
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <i className="ri-bookmark-line text-white text-xl"></i>
          </div>
          <p className="text-white leading-relaxed text-base flex-1">
            {identity}
          </p>
        </div>
      </div>

      {/* 3개 카드 */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* 기술 분야 */}
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
          <div className="flex items-center gap-2 mb-2">
            <i className="ri-stack-line text-white text-lg"></i>
            <h4 className="font-bold text-sm">기술 분야</h4>
          </div>
          <p className="text-sm text-pink-100">
            엣지 AI 컴퓨팅
            <br />
            모바일 비전 AI
          </p>
        </div>

        {/* 핵심 기술 */}
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
          <div className="flex items-center gap-2 mb-2">
            <i className="ri-cpu-line text-white text-lg"></i>
            <h4 className="font-bold text-sm">핵심 기술</h4>
          </div>
          <p className="text-sm text-pink-100">
            딥러닝 추론
            <br />
            실시간 영상 분석
          </p>
        </div>

        {/* 응용 영역 */}
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
          <div className="flex items-center gap-2 mb-2">
            <i className="ri-focus-3-line text-white text-lg"></i>
            <h4 className="font-bold text-sm">응용 영역</h4>
          </div>
          <p className="text-sm text-pink-100">
            모바일 디바이스
            <br />
            카메라 센서
          </p>
        </div>
      </div>

      {/* 바닥 영역 */}
      <div className="mt-6 pt-6 border-t border-white/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <i className="ri-check-double-line text-emerald-300 text-xl"></i>
            <span className="font-bold">분석 완료</span>
          </div>
          <button className="px-6 py-3 bg-white text-pink-600 rounded-lg hover:bg-pink-50 font-bold whitespace-nowrap cursor-pointer transition-all">
            <i className="ri-download-line mr-2"></i>
            리포트 다운로드
          </button>
        </div>
      </div>
    </div>
  );
}
