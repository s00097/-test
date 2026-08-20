import React, { useState } from 'react';
import { CartItem } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
  onOrderSuccess: (orderId: string) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  subtotal,
  shipping,
  total,
  onOrderSuccess
}) => {
  const [step, setStep] = useState<'details' | 'success'>('details');
  const [name, setName] = useState('王小綠');
  const [phone, setPhone] = useState('0912-345-678');
  const [address, setAddress] = useState('台北市大安區新生南路三段 100 號');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'linepay' | 'cod'>('card');
  const [isPackagingEco, setIsPackagingEco] = useState(true);
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const newOrderId = `VD-${Date.now().toString().slice(-6)}`;
    setOrderId(newOrderId);
    setStep('success');
    onOrderSuccess(newOrderId);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={step === 'success' ? onClose : undefined}
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      />

      <div className="flex min-h-full items-center justify-center p-4 sm:p-6 text-center">
        <div className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 sm:p-8 text-left align-middle shadow-2xl transition-all animate-in zoom-in-95 duration-200">
          {step === 'details' ? (
            <form onSubmit={handleSubmitOrder}>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-blue-600 text-[24px]">
                    local_shipping
                  </span>
                  <h3 className="font-hanken font-bold text-[18px] text-slate-900">
                    填寫配送與付款資訊
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>

              {/* Form fields */}
              <div className="space-y-4 font-inter text-[13px]">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">收件人姓名</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">聯絡電話</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">配送地址 (台灣本島)</label>
                  <input
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-slate-900"
                  />
                </div>

                {/* Packaging notice */}
                <div className="p-3.5 bg-blue-50/80 rounded-xl border border-blue-200 flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-blue-600 text-[20px] shrink-0 mt-0.5">
                    eco
                  </span>
                  <div>
                    <h5 className="font-semibold text-blue-900 text-[13px]">
                      Verdant 專業植栽保護包裝
                    </h5>
                    <p className="text-[12px] text-blue-700/80 mt-0.5 leading-relaxed">
                      包含根部保濕、防晃固定箱與 30 天健康保證卡。
                    </p>
                  </div>
                </div>

                {/* Payment Selection */}
                <div>
                  <label className="block text-slate-700 font-semibold mb-2">付款方式</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'card', label: '信用卡結帳' },
                      { id: 'linepay', label: 'LINE Pay' },
                      { id: 'cod', label: '貨到付款' }
                    ].map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setPaymentMethod(m.id as any)}
                        className={`py-2 px-2 text-center rounded-lg border transition-all text-[12px] ${
                          paymentMethod === m.id
                            ? 'bg-blue-600 text-white border-blue-600 font-semibold shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {m.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Total Preview */}
                <div className="pt-3 border-t border-slate-100 flex justify-between items-center text-[15px]">
                  <span className="font-inter text-slate-600">應付總金額</span>
                  <span className="font-inter font-bold text-[22px] text-blue-600">
                    NT$ {total.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-2.5 border border-slate-200 text-slate-700 font-inter text-[13px] font-semibold rounded-lg hover:bg-slate-50 transition-colors"
                >
                  返回修改
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-blue-600 text-white font-inter text-[13px] font-semibold rounded-lg hover:bg-blue-700 active:scale-98 shadow-xs transition-colors"
                >
                  確認結帳
                </button>
              </div>
            </form>
          ) : (
            /* Success screen */
            <div className="text-center py-4">
              <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4 border border-blue-200 animate-in zoom-in-50 duration-300">
                <span className="material-symbols-outlined text-[36px]">check_circle</span>
              </div>
              <h3 className="font-hanken font-bold text-[22px] text-slate-900 mb-2">
                訂單建立成功！
              </h3>
              <p className="font-inter text-[14px] text-slate-600 mb-6 leading-relaxed">
                感謝您對 Verdant 的支持。我們已為您的植栽進行專屬保溫包裝，預計 1-2 天內由專車安全送達！
              </p>

              <div className="bg-slate-50 p-4 rounded-xl text-left text-[13px] font-inter space-y-2 mb-6 border border-slate-200">
                <div className="flex justify-between">
                  <span className="text-slate-500">訂單編號：</span>
                  <strong className="text-slate-900 font-mono">{orderId}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">收件人：</span>
                  <span className="text-slate-900 font-medium">{name} ({phone})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">配送地址：</span>
                  <span className="text-slate-900 truncate max-w-[200px]">{address}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-slate-200 font-semibold">
                  <span className="text-slate-900">付款金額：</span>
                  <span className="text-blue-600 font-bold">NT$ {total.toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-inter text-[14px] font-semibold rounded-lg transition-colors shadow-xs"
              >
                完成並返回首頁
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
