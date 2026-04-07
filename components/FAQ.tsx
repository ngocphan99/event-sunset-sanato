import React from 'react';
import Section from './ui/Section';

const FAQItem = ({ q, a }: { q: string, a: string }) => (
  <div className="border-b border-slate-200 py-4 last:border-0">
    <h4 className="font-bold text-slate-900 mb-2">{q}</h4>
    <p className="text-slate-600 text-sm">{a}</p>
  </div>
);

const FAQ = () => {
  return (
    <Section id="faq" title="Câu hỏi thường gặp" className="bg-white">
      <div className="max-w-2xl mx-auto">
        <FAQItem 
          q="Service charge của resort tính như thế nào?" 
          a="Phí phục vụ (Service charge) đã bao gồm trong giá niêm yết nếu có ghi chú 'Net', hoặc chưa bao gồm nếu ghi chú '++' (thường là 5% Service Charge + VAT hiện hành). Đối với phí phục vụ tiệc (setup fee), áp dụng 50,000đ/ghế cho khách lưu trú và có phụ thu thêm phí sàn cho khách không lưu trú."
        />
        <FAQItem 
          q="Backup mưa bão là gì?" 
          a="Đây là phí chuẩn bị sẵn một địa điểm dự phòng trong nhà khi quý khách đặt tiệc ngoài trời. Nếu thời tiết xấu buộc phải chuyển vào trong, phí này chi trả cho nhân sự setup lại lần 2."
        />
        <FAQItem 
          q="Ý nghĩa của ký hiệu ++?" 
          a="Ký hiệu ++ biểu thị giá chưa bao gồm Thuế VAT và Phí phục vụ (Service Charge). Quý khách vui lòng cộng thêm các khoản này vào báo giá cuối cùng."
        />
      </div>
    </Section>
  );
};

export default FAQ;