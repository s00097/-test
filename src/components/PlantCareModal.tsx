import React, { useState } from 'react';

interface PlantCareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PlantCareModal: React.FC<PlantCareModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'guide' | 'troubleshoot'>('guide');
  const [symptom, setSymptom] = useState<string>('');

  if (!isOpen) return null;

  const troubleshootingResults: Record<string, { title: string; cause: string; solution: string }> = {
    yellow_leaves: {
      title: '葉片發黃 (Yellow Leaves)',
      cause: '最常見的原因是「過度澆水」導致根部缺氧窒息，或是排水不良；其次是光照不足或自然老化。',
      solution: '立即停止澆水，檢查盆底排水孔是否通暢。待表土 3-5cm 完全乾燥後再少量澆水，並移至通風散射光處。'
    },
    brown_tips: {
      title: '葉尖乾枯焦黑 (Brown Tips)',
      cause: '環境空氣過於乾燥、冷暖氣直吹，或澆水時水中氯氣與礦物質累積。',
      solution: '使用噴霧瓶為葉面周圍增濕，避免放置於冷暖氣出風口下方。可將自來水靜置一日後再澆灌。'
    },
    drooping: {
      title: '葉片下垂無力 (Drooping)',
      cause: '植物嚴重缺水，或是爛根導致無法吸水。',
      solution: '觸摸土壤：若極乾燥，請進行「浸盆法」充分補水；若土壤潮濕卻下垂，表示根系受損，需修根並換乾淨介質。'
    },
    pests: {
      title: '葉背白點或蟲害 (Pests)',
      cause: '通風不良與乾燥容易誘發紅蜘蛛、介殼蟲或粉蝨。',
      solution: '以濕布擦拭葉片正反面，並噴灑稀釋印楝油或苦楝油溶液，加強室內空氣循環。'
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      />

      {/* Modal Dialog */}
      <div className="flex min-h-full items-center justify-center p-4 sm:p-6 text-center">
        <div className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 sm:p-8 text-left align-middle shadow-2xl transition-all animate-in zoom-in-95 duration-200 border border-slate-200">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                <span className="material-symbols-outlined text-[24px]">spa</span>
              </div>
              <div>
                <h3 className="font-hanken font-bold text-[20px] text-slate-900">
                  植物養護全書
                </h3>
                <p className="font-inter text-[12px] text-slate-400">Verdant Botanical Care Master</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-700 p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <span className="material-symbols-outlined text-[22px]">close</span>
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex gap-4 border-b border-slate-200 my-4">
            <button
              onClick={() => setActiveTab('guide')}
              className={`pb-3 px-1 font-inter text-[14px] font-medium transition-all relative ${
                activeTab === 'guide'
                  ? 'text-blue-600 font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              基礎四季指南
            </button>
            <button
              onClick={() => setActiveTab('troubleshoot')}
              className={`pb-3 px-1 font-inter text-[14px] font-medium transition-all relative ${
                activeTab === 'troubleshoot'
                  ? 'text-blue-600 font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              植物急救診斷
            </button>
          </div>

          {/* Content */}
          {activeTab === 'guide' ? (
            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
              {/* Care Rule 1: Water */}
              <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="material-symbols-outlined text-blue-600 text-[26px] shrink-0 mt-0.5">
                  water_drop
                </span>
                <div>
                  <h4 className="font-hanken font-bold text-[15px] text-slate-900 mb-1">
                    「不乾不澆，澆則澆透」的水分原則
                  </h4>
                  <p className="font-inter text-[13px] text-slate-600 leading-relaxed">
                    絕大多數室內植物並非死於乾旱，而是因澆水過頻爛根。請用手指插入土壤約 2-3 公分，感覺乾燥且花盆變輕時，再均勻澆透至盆底流出多餘水分，並倒掉底盤積水。
                  </p>
                </div>
              </div>

              {/* Care Rule 2: Light */}
              <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="material-symbols-outlined text-amber-500 text-[26px] shrink-0 mt-0.5">
                  wb_sunny
                </span>
                <div>
                  <h4 className="font-hanken font-bold text-[15px] text-slate-900 mb-1">
                    明亮散射光：最理想的室內採光
                  </h4>
                  <p className="font-inter text-[13px] text-slate-600 leading-relaxed">
                    如同透過白色窗紗灑落的柔和日光。避免正中午強烈直射陽光照射葉面造成葉斑灼傷；若空間光線偏暗，可適度搭配全光譜植物生長燈補光。
                  </p>
                </div>
              </div>

              {/* Care Rule 3: Air & Humidity */}
              <div className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="material-symbols-outlined text-emerald-600 text-[26px] shrink-0 mt-0.5">
                  air
                </span>
                <div>
                  <h4 className="font-hanken font-bold text-[15px] text-slate-900 mb-1">
                    空氣流通與葉面清潔
                  </h4>
                  <p className="font-inter text-[13px] text-slate-600 leading-relaxed">
                    良好的空氣對流能大幅降低病蟲害機率。定期以微濕軟布擦拭大片觀葉植物（如龜背芋、琴葉榕）的葉面灰塵，能顯著提升光合作用效率並保持葉片油亮。
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
              <p className="font-inter text-[13px] text-slate-600">
                點選您家植物目前遇到的狀況，獲取 Verdant 綠植專家的即時診斷與解法：
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'yellow_leaves', label: '🍂 葉片發黃變軟' },
                  { id: 'brown_tips', label: '🔥 葉尖焦黑乾燥' },
                  { id: 'drooping', label: '🥀 整株垂頭喪氣' },
                  { id: 'pests', label: '🐛 出現白色點點或蟲害' }
                ].map((btn) => (
                  <button
                    key={btn.id}
                    onClick={() => setSymptom(btn.id)}
                    className={`p-3 text-left rounded-lg font-inter text-[13px] border transition-all ${
                      symptom === btn.id
                        ? 'bg-blue-600 text-white border-blue-600 font-semibold shadow-xs'
                        : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>

              {symptom && troubleshootingResults[symptom] && (
                <div className="p-5 rounded-xl bg-blue-50/50 border border-blue-200 mt-4 animate-in fade-in duration-200">
                  <h4 className="font-hanken font-bold text-[15px] text-blue-700 mb-2 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[20px]">check_circle</span>
                    {troubleshootingResults[symptom].title}
                  </h4>
                  <div className="space-y-2 text-[13px] text-slate-700 font-inter">
                    <p>
                      <strong className="text-slate-900">可能原因：</strong>{' '}
                      {troubleshootingResults[symptom].cause}
                    </p>
                    <p>
                      <strong className="text-slate-900">改善方案：</strong>{' '}
                      {troubleshootingResults[symptom].solution}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Footer */}
          <div className="mt-6 pt-4 border-t border-slate-200 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-inter text-[14px] font-semibold transition-colors shadow-xs"
            >
              我知道了
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
