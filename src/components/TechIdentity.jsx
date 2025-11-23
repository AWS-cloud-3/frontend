export default function TechIdentity({ identity, fields, core, apps }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-sky-500 rounded-xl flex items-center justify-center">
          <i className="ri-fingerprint-line text-white text-2xl"></i>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">
            Step 4. 기술 정체성 분석
          </h3>
          <p className="text-sm text-gray-600">
            이 아이디어의 기술적 정체성을 한 문장으로 정의했습니다
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-indigo-50 via-sky-50 to-cyan-50 rounded-xl p-6 border border-sky-100">
        <p className="text-gray-800 leading-relaxed text-base">{identity}</p>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg p-4 border border-slate-200 shadow-sm">
          <h4 className="font-bold text-sm text-gray-900 mb-2">기술 분야</h4>
          <p className="text-sm text-gray-700">{fields.join(", ")}</p>
        </div>

        <div className="bg-white rounded-lg p-4 border border-slate-200 shadow-sm">
          <h4 className="font-bold text-sm text-gray-900 mb-2">핵심 기술</h4>
          <p className="text-sm text-gray-700">{core.join(", ")}</p>
        </div>

        <div className="bg-white rounded-lg p-4 border border-slate-200 shadow-sm">
          <h4 className="font-bold text-sm text-gray-900 mb-2">응용 영역</h4>
          <p className="text-sm text-gray-700">{apps.join(", ")}</p>
        </div>
      </div>
    </div>
  );
}
