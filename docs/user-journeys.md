# User Journeys — Nowbat Website

> **Phase 1 deliverable.** Three annotated user flow diagrams with decision points and friction points.
> **Last updated:** 2026-05-23

---

## Overview

Three distinct audiences visit the Nowbat website with different goals, entry points, and evaluation criteria. Each journey is mapped below with: entry channel, key decision points, friction points (FP), and drop-off risks (DOR).

---

## Journey 1: The Evaluator (کارفرمای ارزیاب)

**Persona:** صاحب کسب‌وکار کوچک ایرانی — آرایشگاه، کلینیک، مرکز ماساژ، مشاور. فنی نیست. می‌خواهد بداند آیا این ابزار برای کسب‌وکارش مناسب است یا نه.

**Goal:** تصمیم‌گیری برای نصب یا رد کردن افزونه

**Entry channels:** جستجوی گوگل · اینستاگرام · توصیه دوستان · تلگرام

---

### Flow Diagram

```
[Google Search]
    │
    ▼
"افزونه نوبت‌دهی وردپرس"
    │
    ▼
┌─────────────────────────────────────┐
│  Landing Page (/)                    │
│  ┌────────────────────────────────┐ │
│  │ Hero Section                   │ │
│  │ "سیستم نوبت‌دهی برای ایران"    │ │
│  └────────────────────────────────┘ │
└─────────────────────────────────────┘
    │
    │  [FP-1] آیا این فارسی است؟
    │  → بله: ادامه | نه: bounce
    │
    ▼
┌─────────────────────────────────────┐
│  HowItWorksSection                  │
│  "۳ گام ساده" — reassurance        │
└─────────────────────────────────────┘
    │
    │  [FP-2] آیا می‌توانم نصب کنم؟
    │  → بله (ساده به نظر می‌رسد): ادامه
    │
    ▼
┌─────────────────────────────────────┐
│  AlternatingFeature — Dashboard     │
│  "واقعاً مثل یک سیستم حرفه‌ای است" │
└─────────────────────────────────────┘
    │
    ▼
┌─────────────────────────────────────┐
│  AlternatingFeature — Payment       │
│  [Decision Point A]                 │
│  آیا زرین‌پال پشتیبانی می‌شود؟      │
│  ✅ بله → اعتماد بالا می‌رود        │
└─────────────────────────────────────┘
    │
    │  [FP-3] آیا SMS ایرانی دارد؟
    │  → می‌رود AlternatingFeature SMS
    │
    ▼
┌─────────────────────────────────────┐
│  AlternatingFeature — SMS           │
│  کاوه‌نگار / ملی‌پیامک / آی‌پی‌پنل  │
│  ✅ → اعتماد کامل می‌شود           │
└─────────────────────────────────────┘
    │
    ▼
┌─────────────────────────────────────┐
│  TestimonialsCarousel               │
│  [Decision Point B]                 │
│  دیگران استفاده کرده‌اند؟           │
│  ✅ کسب‌وکارهای مشابه من           │
└─────────────────────────────────────┘
    │
    ▼
┌─────────────────────────────────────┐
│  DemoCtaBanner                      │
│  [Decision Point C]                 │
│  می‌خواهم قبل از نصب امتحان کنم     │
│  → "مشاهده دمو زنده"               │
└─────────────────────────────────────┘
    │
    ├─── [Path A: Demo]
    │        ▼
    │    /demo page
    │    اعتبارنامه‌های ادمین
    │    → لانچ demo.nowbat.ir
    │    → تور راهنما شروع می‌شود
    │    [FP-4] آیا می‌توانم واقعاً آن را
    │    امتحان کنم؟ → بله → قانع می‌شود
    │        ▼
    │    [Conversion] → برمی‌گردد و نصب می‌کند
    │
    └─── [Path B: Install directly]
             ▼
         /docs/getting-started/installation
         دانلود و نصب
             ▼
         [Conversion] ✅ نصب کامل
```

**Friction Points (FP) Summary:**

| #    | Friction Point             | Risk Level | Mitigation                              |
| ---- | -------------------------- | ---------- | --------------------------------------- |
| FP-1 | صفحه به نظر فارسی نمی‌رسد  | HIGH       | headline فارسی بزرگ در hero، RTL کامل   |
| FP-2 | نصب پیچیده به نظر می‌رسد   | MEDIUM     | "۳ گام ساده" HowItWorks با زبان غیرفنی  |
| FP-3 | درگاه پرداخت ایرانی ندارد؟ | HIGH       | لوگوهای زرین‌پال/آی‌دی‌پی prominently   |
| FP-4 | Demo ممکن است کار نکند     | MEDIUM     | نمایش "داده‌ها هر ۲۴ ساعت ریست می‌شوند" |

**Drop-off Risk (DOR) Points:**

- بعد از hero اگر hero متقاعد نکند → رقیب
- بعد از payment section اگر درگاه مورد نظر نباشد → رقیب
- در Demo اگر راهنمای تور سردرگم‌کننده باشد → رها کردن

---

## Journey 2: The Developer (توسعه‌دهنده)

**Persona:** توسعه‌دهنده وردپرس ایرانی. می‌خواهد برای مشتری یک سایت رزرو راه‌اندازی کند یا افزونه را گسترش دهد.

**Goal:** ارزیابی فنی → integration → پیاده‌سازی سفارشی‌سازی

**Entry channels:** GitHub · Stack Overflow · جستجوی گوگل developer-focused · توییتر/X developer community

---

### Flow Diagram

```
[Google Search / GitHub]
    │
    ▼
"WordPress booking plugin REST API" / "nowbat plugin"
    │
    ▼
┌─────────────────────────────────────┐
│  Landing Page یا Docs مستقیم       │
│  [Decision Point A]                 │
│  آیا مستندات کامل و فنی دارد؟      │
└─────────────────────────────────────┘
    │
    ├─── اگر از Landing Page:
    │        │
    │        ▼
    │    FeatureGrid — "Developer" chip
    │    یا Footer → /docs link
    │
    └─── اگر مستقیم به /docs:
             │
             ▼
        ┌─────────────────────────────────────┐
        │  /docs/rest-api                     │
        │  [Decision Point B]                 │
        │  آیا endpoint‌ها کافی هستند؟        │
        │  آیا auth مشخص شده است؟             │
        │  آیا rate limiting تعریف شده است؟   │
        └─────────────────────────────────────┘
             │
             ▼
        ┌─────────────────────────────────────┐
        │  /docs/hooks                        │
        │  [Decision Point C]                 │
        │  آیا می‌توانم رفتار پلاگین را      │
        │  با فیلترها تغییر دهم؟             │
        │  آیا مثال کد وجود دارد؟             │
        └─────────────────────────────────────┘
             │
             ▼
        ┌─────────────────────────────────────┐
        │  /docs/advanced/extending            │
        │  [Decision Point D]                  │
        │  چطور یک درگاه پرداخت سفارشی        │
        │  اضافه کنم؟                          │
        │  → مثال کد کامل موجود است ✅         │
        └─────────────────────────────────────┘
             │
             ▼
        ┌─────────────────────────────────────┐
        │  /docs/advanced/custom-roles        │
        │  نقش‌های سفارشی وردپرس             │
        │  → capability constants کامل ✅     │
        └─────────────────────────────────────┘
             │
             ▼
        ┌─────────────────────────────────────┐
        │  Demo Site                          │
        │  [Decision Point E]                 │
        │  می‌خواهم API را live تست کنم        │
        │  → REST API calls روی demo site     │
        │  → نتایج واقعی می‌بیند             │
        └─────────────────────────────────────┘
             │
             ▼
        [Conversion] ✅ نصب روی سایت مشتری
        یا fork روی GitHub
```

**Friction Points (FP) Summary:**

| #    | Friction Point                     | Risk Level | Mitigation                              |
| ---- | ---------------------------------- | ---------- | --------------------------------------- |
| FP-1 | مستندات REST API ناقص یا گیج‌کننده | CRITICAL   | جداول کامل method/path/auth/rate-limit  |
| FP-2 | مثال‌های کد دارای اشکال هستند      | HIGH       | همه code examples تست‌شده در محیط واقعی |
| FP-3 | Hooks بدون مثال هستند              | HIGH       | هر hook یک مثال کامل دارد               |
| FP-4 | نمی‌داند چطور extend کند           | MEDIUM     | راهنمای extending با یک plugin example  |

**Drop-off Risk (DOR) Points:**

- وقتی مستندات API ناقص باشد → انتخاب رقیب فنی‌تر
- وقتی مثال‌های کد اجرا نشوند → بی‌اعتمادی کامل

---

## Journey 3: The Existing User (کاربر فعلی)

**Persona:** صاحب کسب‌وکاری که نوبت را نصب کرده و یک مشکل خاص دارد یا می‌خواهد قابلیتی را فعال کند.

**Goal:** حل مشکل یا یادگیری قابلیت جدید

**Entry channels:** جستجوی گوگل مستقیم برای مشکل · bookmark مستقیم به /docs · از ادمین وردپرس لینک "Help"

---

### Flow Diagram

```
[Problem Occurs]
    │
    ▼
"SMS نوبت ارسال نمی‌شود" — Google Search
    │
    ▼
┌─────────────────────────────────────┐
│  /docs/troubleshooting              │
│  [Decision Point A]                 │
│  آیا مشکلم اینجاست؟                │
│  → بله → راه‌حل گام‌به‌گام          │
└─────────────────────────────────────┘
    │
    ├─── [Path A: مشکل حل می‌شود]
    │        ▼
    │    ✅ برطرف شد
    │    [Optional] Bookmark می‌کند
    │    [Optional] می‌رود بخش دیگری
    │        از مستندات را کشف کند
    │
    └─── [Path B: مشکل اینجا نیست]
             │
             ▼
        ┌─────────────────────────────────────┐
        │  /docs/configuration/sms            │
        │  [Decision Point B]                 │
        │  بررسی تنظیمات درست                │
        │  → متوجه می‌شود daily_cap پر است   │
        └─────────────────────────────────────┘
             │
             ▼
        ✅ مشکل حل شد

---

[Want New Feature]
    │
    ▼
"چطور تقویم گوگل را وصل کنم"
    │
    ▼
┌─────────────────────────────────────┐
│  /guides/google-calendar            │
│  راهنمای گام‌به‌گام                  │
│  [Decision Point C]                 │
│  آیا Google Cloud Console دارم؟     │
└─────────────────────────────────────┘
    │
    ├─── [Path A: دارم]
    │        ▼
    │    راهنما را دنبال می‌کند
    │    → OAuth2 تنظیم می‌کند
    │    ✅ تقویم وصل می‌شود
    │
    └─── [Path B: ندارم]
             │
             ▼
        بخش "ایجاد پروژه جدید" در راهنما
        → خودش ایجاد می‌کند
             │
             ▼
        ✅ تقویم وصل می‌شود

---

[Need Support]
    │
    ▼
راه‌حل در مستندات پیدا نکرد
    │
    ▼
┌─────────────────────────────────────┐
│  /docs/troubleshooting              │
│  → Debug Mode instructions          │
│  → لینک به GitHub Issues            │
│  [FP-1] آیا پشتیبانی فعال است؟     │
└─────────────────────────────────────┘
    │
    ▼
GitHub Issue باز می‌کند
    │
    ▼
[Resolution] با پاسخ maintainer
```

**Friction Points (FP) Summary:**

| #    | Friction Point                            | Risk Level | Mitigation                                 |
| ---- | ----------------------------------------- | ---------- | ------------------------------------------ |
| FP-1 | نمی‌داند از کجا کمک بگیرد                 | HIGH       | footer با لینک GitHub Issues، WP.org forum |
| FP-2 | راهنماها ناقص یا گیج‌کننده هستند          | HIGH       | هر guide یک نتیجه واضح دارد (`<Steps>`)    |
| FP-3 | اسکرین‌شات‌ها با نسخه فعلی match نمی‌کنند | MEDIUM     | وژن مشخص روی هر screenshot                 |

**Drop-off Risk (DOR) Points:**

- وقتی مشکل در troubleshooting پیدا نشود → فرستادن issue به جای uninstall
- وقتی راهنما نیمه‌کاره باشد → uninstall

---

## Cross-Journey Design Implications

### اقدامات ضروری از این تحلیل:

1. **Hero باید فوری سه سیگنال بدهد:** فارسی بودن، درگاه ایرانی، SMS ایرانی
2. **مستندات API باید production-quality باشند** (نه placeholder) — developer journey به این وابسته است
3. **Troubleshooting باید ۱۵+ مشکل رایج را پوشش دهد** با راه‌حل واضح
4. **Demo site باید برای هر دو audience کار کند:** evaluator (تور راهنما) و developer (live API testing)
5. **همه guides باید به نتیجه مشخص برسند** — "هدف این راهنما: ..." در ابتدا
6. **Search (Cmd+K) باید فوری نتیجه بدهد** — existing user از search استفاده می‌کند نه navigation

### Page Priority از منظر Journey:

| صفحه                    | برای Evaluator | برای Developer | برای Existing User |
| ----------------------- | -------------- | -------------- | ------------------ |
| `/`                     | CRITICAL       | Medium         | Low                |
| `/features`             | High           | Medium         | Low                |
| `/demo`                 | CRITICAL       | High           | Low                |
| `/docs/rest-api`        | Low            | CRITICAL       | Medium             |
| `/docs/hooks`           | Low            | CRITICAL       | Medium             |
| `/docs/troubleshooting` | Low            | Medium         | CRITICAL           |
| `/guides/*`             | Medium         | High           | CRITICAL           |
| `/blog`                 | Medium         | Medium         | Low                |
