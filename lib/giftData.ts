// ============================================================
// 🎁 GIFT DATA — EDIT HERE to add or change customer content
// ============================================================
// Each key is the URL slug: /gift/aya → id = "aya"
// ============================================================

export interface GiftData {
  name: string;           // Shown in the intro "Make a wish, [name]!"
  senderName?: string;    // Signature at the bottom of the letter (e.g., "Aya ✨")
  envelopeImage: string;  // Path inside /public — the envelope image
  birthdayImage: string;  // Path inside /public — the main birthday card image
  message: string;        // The birthday message (supports \n for line breaks)
  musicUrl?: string;      // Optional: URL to a background music mp3
  accentColor?: string;   // Optional: custom accent color (default: #38bdf8)
}

// ============================================================
// CUSTOMER DATA
// ============================================================
const defaultGift: GiftData = {
  name: "lelo",                                     // اسم مستلم الهدية
  senderName: "your love",                            // التوقيع في آخر الرسالة (اختياري)
  envelopeImage: "/images/envelope-aya.png",          // صورة الظرف
  birthdayImage: "/images/birthday-aya.png",          // صورة الهدية النهائية
  accentColor: "#38bdf8",                             // اللون الأزرق الفاتح المتوافق مع التصميم الجديد
  musicUrl: "",                                       // رابط الموسيقى هنا
  message: `كل سنه وانت طيب ي ليلو وعقبال مليون سنة ويارب تحقق كل الي نفسك فيه واشوفك مبسوط دايماً ومع كل الي بتحبهم ومعايا اكيد ونفضل مع بعض دايماً وطبعاً عيد ميلادك السنادي احلي من كل سنه عشان انا معاك  وانت عارف غلاوتك عندي اكيد ومن وقت ما عرفتك وانت واخد مكانه لوحدك عندي وغير اي حد وتفضل دايماً اكتر حد بيعصبني وبيحرق دمي بس يلا فداك يعني عندي كام علي وربنا يخليني ليك وافضل انكش فيك واطلع عليك جناني وتفضل مستحملني وان شاءلله اشوفك احلي ظابط ف الدنيا وهانت خلاص فاضل علي الحلم تكه وانا فخوره بيك دايماً وفخوره ب اي حاجه بتعملها وربنا يهديك وتبطل جنان عشان تعبت منك enjoy your day my favorite lelo💕`,
};

const giftData: Record<string, GiftData> = {
  ahmed: defaultGift,
  aya: defaultGift,
};

export default giftData;