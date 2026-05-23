# Demo Data Specification — Nowbat Demo Site

> **Phase 1 deliverable.** Exact specification of all demo data for `demo.nowbat.ir`.
> **Last updated:** 2026-05-23
> **Used by:** Phase 9 (Demo Infrastructure) — `tools/demo-seed.php`

---

## Overview

The demo site must feel like a real, busy business — not an empty shell. All data should be internally consistent (staff assigned to appropriate services, appointment times within business hours, customer phone numbers following Iran format).

**Seed idempotency:** All records include a meta key `_nowbat_seed_id` with a stable UUID so the seeder can detect and skip existing records on re-run.

---

## Business Profile

```
Business Name:    آرایشگاه و اسپای VIP
Address:          تهران، خیابان ولیعصر، پلاک ۲۴۷
Phone:            021-88001234
Timezone:         Asia/Tehran
Currency:         IRR (تومان display)
Language:         fa_IR
```

---

## Working Hours (Default for All Staff unless overridden)

| روز هفته | شروع  | پایان | وقفه        |
| -------- | ----- | ----- | ----------- |
| شنبه     | ۰۹:۰۰ | ۲۱:۰۰ | ۱۳:۰۰–۱۴:۰۰ |
| یکشنبه   | ۰۹:۰۰ | ۲۱:۰۰ | ۱۳:۰۰–۱۴:۰۰ |
| دوشنبه   | ۰۹:۰۰ | ۲۱:۰۰ | ۱۳:۰۰–۱۴:۰۰ |
| سه‌شنبه  | ۰۹:۰۰ | ۲۱:۰۰ | ۱۳:۰۰–۱۴:۰۰ |
| چهارشنبه | ۰۹:۰۰ | ۲۱:۰۰ | ۱۳:۰۰–۱۴:۰۰ |
| پنجشنبه  | ۰۹:۰۰ | ۱۸:۰۰ | —           |
| جمعه     | تعطیل | —     | —           |

---

## Services (4 خدمت)

### Service 1: کوتاهی مو

```
seed_id:          svc-001
name:             کوتاهی مو
duration:         30 دقیقه
buffer_after:     5 دقیقه (اسلات بعدی ۳۵ دقیقه بعد)
price:            150000 (تومان)
payment:          required (online payment mandatory)
capacity:         1 (یک مشتری در یک زمان)
description:      کوتاهی مو با استفاده از تکنیک‌های روز دنیا
color:            #378ADD
requires_approval: false
```

### Service 2: اصلاح ریش

```
seed_id:          svc-002
name:             اصلاح ریش
duration:         20 دقیقه
buffer_after:     5 دقیقه
price:            80000 (تومان)
payment:          optional (online or cash)
capacity:         1
description:      اصلاح ریش حرفه‌ای با تیغ
color:            #1D9E75
requires_approval: false
```

### Service 3: مشاوره تغذیه

```
seed_id:          svc-003
name:             مشاوره تغذیه
duration:         60 دقیقه
buffer_after:     10 دقیقه
price:            300000 (تومان)
payment:          required
capacity:         1
description:      مشاوره تخصصی تغذیه با متخصص تغذیه
color:            #E9A526
requires_approval: true (مدیر باید تأیید کند)
```

### Service 4: ماساژ ریلکسی

```
seed_id:          svc-004
name:             ماساژ ریلکسی
duration:         90 دقیقه
buffer_after:     15 دقیقه
price:            450000 (تومان)
payment:          required
capacity:         1
description:      ماساژ کامل بدن با روغن‌های طبیعی
color:            #E24B4A
requires_approval: false
```

---

## Staff Members (4 کارمند)

### Staff 1: علی محمدی

```
seed_id:          staff-001
name:             علی محمدی
title:            آرایشگر ارشد
avatar_initials:  ع.م
color:            #378ADD
services:         [svc-001, svc-002] — کوتاهی مو + اصلاح ریش
wp_user_login:    demo-staff
working_hours:    default business hours
bio:              ۱۰ سال سابقه در آرایشگری حرفه‌ای
```

### Staff 2: سارا حسینی

```
seed_id:          staff-002
name:             سارا حسینی
title:            متخصص تغذیه
avatar_initials:  س.ح
color:            #1D9E75
services:         [svc-003] — مشاوره تغذیه
wp_user_login:    (no WP user — staff-only)
working_hours:    شنبه–چهارشنبه ۱۰:۰۰–۱۷:۰۰، وقفه ۱۳:۰۰–۱۳:۳۰
bio:              دکترای تغذیه از دانشگاه تهران
```

### Staff 3: رضا کریمی

```
seed_id:          staff-003
name:             رضا کریمی
title:            ماساژور حرفه‌ای
avatar_initials:  ر.ک
color:            #E24B4A
services:         [svc-004] — ماساژ ریلکسی
wp_user_login:    (no WP user)
working_hours:    شنبه–پنجشنبه ۱۱:۰۰–۲۰:۰۰، وقفه ۱۴:۰۰–۱۴:۳۰
bio:              گواهینامه ماساژ درمانی از اتحادیه بین‌المللی
```

### Staff 4: مریم احمدی

```
seed_id:          staff-004
name:             مریم احمدی
title:            آرایشگر زنانه
avatar_initials:  م.ا
color:            #E9A526
services:         [svc-001, svc-002, svc-004] — کوتاهی مو + اصلاح + ماساژ
wp_user_login:    (no WP user)
working_hours:    یکشنبه–پنجشنبه ۰۹:۰۰–۱۸:۰۰، وقفه ۱۳:۰۰–۱۳:۳۰
bio:              متخصص در رنگ و هایلایت مو
```

---

## Customers (20 مشتری)

| #   | seed_id  | نام            | تلفن        | ایمیل                     | sms_opt_out |
| --- | -------- | -------------- | ----------- | ------------------------- | ----------- |
| ۱   | cust-001 | فاطمه رحیمی    | 09121234001 | f.rahimi@example.ir       | false       |
| ۲   | cust-002 | محمد نوری      | 09351234002 | m.nouri@example.ir        | false       |
| ۳   | cust-003 | زهرا صادقی     | 09011234003 | z.sadeghi@example.ir      | true        |
| ۴   | cust-004 | امیر حسین‌زاده | 09121234004 | a.hosseinzadeh@example.ir | false       |
| ۵   | cust-005 | نیلوفر کمالی   | 09351234005 | n.kamali@example.ir       | false       |
| ۶   | cust-006 | داوود رضایی    | 09011234006 | d.rezaei@example.ir       | false       |
| ۷   | cust-007 | شیرین ناصری    | 09121234007 | sh.naseri@example.ir      | false       |
| ۸   | cust-008 | بهنام غفاری    | 09351234008 | b.ghaffari@example.ir     | false       |
| ۹   | cust-009 | مهناز علوی     | 09011234009 | m.alavi@example.ir        | true        |
| ۱۰  | cust-010 | کاوه مرادی     | 09121234010 | k.moradi@example.ir       | false       |
| ۱۱  | cust-011 | پریسا جعفری    | 09351234011 | p.jafari@example.ir       | false       |
| ۱۲  | cust-012 | سهیل رستمی     | 09011234012 | s.rostami@example.ir      | false       |
| ۱۳  | cust-013 | مینا طاهری     | 09121234013 | m.taheri@example.ir       | false       |
| ۱۴  | cust-014 | حسن محمودی     | 09351234014 | h.mahmoudi@example.ir     | false       |
| ۱۵  | cust-015 | الناز حیدری    | 09011234015 | e.heidari@example.ir      | false       |
| ۱۶  | cust-016 | آرمین صالحی    | 09121234016 | a.salehi@example.ir       | false       |
| ۱۷  | cust-017 | گلناز موسوی    | 09351234017 | g.mousavi@example.ir      | true        |
| ۱۸  | cust-018 | فرید کریم‌پور  | 09011234018 | f.karimpour@example.ir    | false       |
| ۱۹  | cust-019 | مژگان نجفی     | 09121234019 | m.najafi@example.ir       | false       |
| ۲۰  | cust-020 | سیاوش رحمانی   | 09351234020 | s.rahmani@example.ir      | false       |

**Notes:**

- All phone numbers are dummy numbers (09xx pattern valid but not assigned to real subscribers)
- All emails are `@example.ir` domain (non-existent, safe for demo)
- 3 customers have `sms_opt_out = true` to demonstrate the feature works

---

## Appointments (50 نوبت)

### Distribution

| وضعیت                | تعداد | توضیح                                      |
| -------------------- | ----- | ------------------------------------------ |
| confirmed            | 30    | ۱۵ نوبت آینده، ۱۵ نوبت گذشته               |
| cancelled            | 8     | ۵ نوبت گذشته، ۳ آینده (لغو شده توسط مشتری) |
| pending_payment      | 5     | نوبت‌های آینده که پرداخت تکمیل نشده        |
| pending_confirmation | 4     | نوبت‌های تغذیه در انتظار تأیید مدیر        |
| completed            | 3     | نوبت‌های گذشته با وضعیت completed          |

### Confirmed — Future (15 نوبت آینده)

تاریخ‌ها: ۱–۱۴ روز آینده از تاریخ seed (relative)

| #   | seed_id | service | staff     | customer | date_offset | time  | payment_status |
| --- | ------- | ------- | --------- | -------- | ----------- | ----- | -------------- |
| ۱   | apt-001 | svc-001 | staff-001 | cust-001 | +1 day      | 09:00 | paid           |
| ۲   | apt-002 | svc-002 | staff-001 | cust-002 | +1 day      | 10:00 | paid           |
| ۳   | apt-003 | svc-004 | staff-003 | cust-003 | +1 day      | 11:00 | paid           |
| ۴   | apt-004 | svc-003 | staff-002 | cust-004 | +2 days     | 10:00 | paid           |
| ۵   | apt-005 | svc-001 | staff-004 | cust-005 | +2 days     | 14:00 | paid           |
| ۶   | apt-006 | svc-002 | staff-001 | cust-006 | +3 days     | 09:30 | paid           |
| ۷   | apt-007 | svc-004 | staff-003 | cust-007 | +3 days     | 15:00 | paid           |
| ۸   | apt-008 | svc-001 | staff-001 | cust-008 | +4 days     | 10:00 | paid           |
| ۹   | apt-009 | svc-003 | staff-002 | cust-009 | +5 days     | 10:30 | paid           |
| ۱۰  | apt-010 | svc-001 | staff-004 | cust-010 | +5 days     | 16:00 | paid           |
| ۱۱  | apt-011 | svc-002 | staff-001 | cust-011 | +6 days     | 09:00 | paid           |
| ۱۲  | apt-012 | svc-004 | staff-003 | cust-012 | +7 days     | 11:00 | paid           |
| ۱۳  | apt-013 | svc-001 | staff-001 | cust-013 | +8 days     | 14:00 | paid           |
| ۱۴  | apt-014 | svc-003 | staff-002 | cust-014 | +9 days     | 10:00 | paid           |
| ۱۵  | apt-015 | svc-001 | staff-004 | cust-015 | +14 days    | 09:00 | paid           |

### Confirmed — Past (15 نوبت گذشته)

| #   | seed_id | service | staff     | customer | date_offset | time  | payment_status |
| --- | ------- | ------- | --------- | -------- | ----------- | ----- | -------------- |
| ۱۶  | apt-016 | svc-001 | staff-001 | cust-016 | -1 day      | 10:00 | paid           |
| ۱۷  | apt-017 | svc-002 | staff-001 | cust-017 | -1 day      | 11:00 | paid           |
| ۱۸  | apt-018 | svc-004 | staff-003 | cust-018 | -2 days     | 14:00 | paid           |
| ۱۹  | apt-019 | svc-003 | staff-002 | cust-019 | -3 days     | 10:00 | paid           |
| ۲۰  | apt-020 | svc-001 | staff-004 | cust-020 | -3 days     | 09:00 | paid           |
| ۲۱  | apt-021 | svc-002 | staff-001 | cust-001 | -5 days     | 15:00 | paid           |
| ۲۲  | apt-022 | svc-001 | staff-001 | cust-002 | -7 days     | 10:30 | paid           |
| ۲۳  | apt-023 | svc-004 | staff-003 | cust-003 | -7 days     | 11:00 | paid           |
| ۲۴  | apt-024 | svc-003 | staff-002 | cust-004 | -10 days    | 10:00 | paid           |
| ۲۵  | apt-025 | svc-001 | staff-004 | cust-005 | -10 days    | 16:00 | paid           |
| ۲۶  | apt-026 | svc-001 | staff-001 | cust-006 | -14 days    | 09:00 | paid           |
| ۲۷  | apt-027 | svc-002 | staff-001 | cust-007 | -14 days    | 10:00 | paid           |
| ۲۸  | apt-028 | svc-004 | staff-003 | cust-008 | -20 days    | 13:00 | paid           |
| ۲۹  | apt-029 | svc-001 | staff-004 | cust-009 | -25 days    | 14:00 | paid           |
| ۳۰  | apt-030 | svc-003 | staff-002 | cust-010 | -30 days    | 10:00 | paid           |

### Cancelled (8 نوبت لغو شده)

| #   | seed_id | service | staff     | customer | date_offset | cancelled_by | cancel_reason    |
| --- | ------- | ------- | --------- | -------- | ----------- | ------------ | ---------------- |
| ۳۱  | apt-031 | svc-001 | staff-001 | cust-011 | -2 days     | customer     | وقت کافی نداشتم  |
| ۳۲  | apt-032 | svc-004 | staff-003 | cust-012 | -5 days     | customer     | بیمار شدم        |
| ۳۳  | apt-033 | svc-002 | staff-001 | cust-013 | -8 days     | admin        | کارمند غایب بود  |
| ۳۴  | apt-034 | svc-003 | staff-002 | cust-014 | -10 days    | customer     | سفر پیش آمد      |
| ۳۵  | apt-035 | svc-001 | staff-004 | cust-015 | -15 days    | customer     | —                |
| ۳۶  | apt-036 | svc-001 | staff-001 | cust-016 | +3 days     | customer     | برنامه تغییر کرد |
| ۳۷  | apt-037 | svc-004 | staff-003 | cust-017 | +5 days     | customer     | —                |
| ۳۸  | apt-038 | svc-003 | staff-002 | cust-018 | +7 days     | customer     | —                |

### Pending Payment (5 نوبت در انتظار پرداخت)

| #   | seed_id | service | staff     | customer | date_offset | time  |
| --- | ------- | ------- | --------- | -------- | ----------- | ----- |
| ۳۹  | apt-039 | svc-001 | staff-001 | cust-019 | +2 days     | 14:30 |
| ۴۰  | apt-040 | svc-004 | staff-003 | cust-020 | +4 days     | 11:00 |
| ۴۱  | apt-041 | svc-001 | staff-004 | cust-001 | +6 days     | 15:00 |
| ۴۲  | apt-042 | svc-002 | staff-001 | cust-002 | +8 days     | 09:30 |
| ۴۳  | apt-043 | svc-001 | staff-001 | cust-003 | +10 days    | 10:30 |

### Pending Confirmation (4 نوبت در انتظار تأیید)

همه برای خدمت "مشاوره تغذیه" که `requires_approval = true` دارد

| #   | seed_id | staff     | customer | date_offset | time  |
| --- | ------- | --------- | -------- | ----------- | ----- |
| ۴۴  | apt-044 | staff-002 | cust-004 | +1 day      | 15:00 |
| ۴۵  | apt-045 | staff-002 | cust-005 | +3 days     | 10:00 |
| ۴۶  | apt-046 | staff-002 | cust-006 | +6 days     | 10:00 |
| ۴۷  | apt-047 | staff-002 | cust-007 | +11 days    | 10:30 |

### Completed (3 نوبت completed)

| #   | seed_id | service | staff     | customer | date_offset | review_score |
| --- | ------- | ------- | --------- | -------- | ----------- | ------------ |
| ۴۸  | apt-048 | svc-004 | staff-003 | cust-008 | -45 days    | 5            |
| ۴۹  | apt-049 | svc-001 | staff-001 | cust-009 | -60 days    | 4            |
| ۵۰  | apt-050 | svc-003 | staff-002 | cust-010 | -90 days    | 5            |

---

## Notification Logs (15 رکورد)

| #   | seed_id   | type  | recipient | status          | message_summary              | created_at_offset |
| --- | --------- | ----- | --------- | --------------- | ---------------------------- | ----------------- |
| ۱   | notif-001 | sms   | cust-001  | sent            | تأیید نوبت کوتاهی مو         | -1 day            |
| ۲   | notif-002 | email | cust-001  | sent            | تأیید نوبت                   | -1 day            |
| ۳   | notif-003 | sms   | cust-002  | sent            | یادآور نوبت فردا             | -1 day            |
| ۴   | notif-004 | sms   | cust-004  | sent            | نوبت تأیید شد                | -2 days           |
| ۵   | notif-005 | sms   | cust-011  | sent            | نوبت لغو شد                  | -2 days           |
| ۶   | notif-006 | email | cust-011  | sent            | تأییدیه لغو نوبت             | -2 days           |
| ۷   | notif-007 | sms   | cust-003  | skipped_opt_out | —                            | -3 days           |
| ۸   | notif-008 | sms   | cust-012  | sent            | لغو نوبت ماساژ               | -5 days           |
| ۹   | notif-009 | sms   | cust-019  | sent            | یادآور پرداخت نوبت           | -0 hours          |
| ۱۰  | notif-010 | email | cust-019  | sent            | یادآور پرداخت نوبت           | -0 hours          |
| ۱۱  | notif-011 | sms   | cust-005  | sent            | نوبت جدید — در انتظار تأیید  | -1 day            |
| ۱۲  | notif-012 | sms   | cust-016  | sent            | تأیید نوبت کوتاهی مو         | -1 day            |
| ۱۳  | notif-013 | sms   | cust-018  | sent            | لغو نوبت                     | -7 days           |
| ۱۴  | notif-014 | email | admin     | sent            | گزارش هفتگی نوبت‌ها          | -7 days           |
| ۱۵  | notif-015 | sms   | cust-020  | failed          | خطا در ارسال — شماره نامعتبر | -2 days           |

---

## Settings Configuration

### General

```
business_name:        آرایشگاه و اسپای VIP
timezone:             Asia/Tehran
date_format:          jalali
number_format:        persian_digits
currency:             IRR
currency_display:     تومان
language:             fa_IR
```

### Payments

```
active_gateway:       zarinpal
zarinpal_merchant:    XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX (sandbox key)
zarinpal_sandbox:     true
idpay_enabled:        false
nextpay_enabled:      false
cash_enabled:         true
```

### SMS

```
provider:             kavenegar
kavenegar_api_key:    DEMO_API_KEY_NOT_REAL
sms_enabled:          true
daily_cap:            100
confirm_template:     تأیید نوبت شما برای {service_name} در تاریخ {date} ساعت {time}
reminder_template:    یادآور: نوبت {service_name} فردا ساعت {time}
cancel_template:      نوبت شما برای {service_name} لغو شد
```

### Email

```
from_name:            نوبت — آرایشگاه VIP
from_email:           no-reply@demo.nowbat.ir
admin_email:          demo-admin@nowbat.ir
send_customer_confirm: true
send_admin_new_booking: true
```

### Advanced

```
slot_cache_ttl:       3600
delete_data_on_uninstall: false
debug_mode:           false
```

---

## WordPress Users (3 کاربر ادمین دمو)

| login          | password      | role           | description                             |
| -------------- | ------------- | -------------- | --------------------------------------- |
| `demo-admin`   | `nowbat2024!` | Administrator  | دسترسی کامل — همه قابلیت‌های نوبت       |
| `demo-manager` | `nowbat2024!` | nowbat_manager | مدیریت نوبت‌ها و مشتریان — بدون تنظیمات |
| `demo-staff`   | `nowbat2024!` | nowbat_staff   | فقط نوبت‌های خودش (Staff 1: علی محمدی)  |

---

## Recurring Appointment Example

یک سری نوبت تکرارشونده برای نمایش قابلیت:

```
parent_appointment:   apt-001 (کوتاهی مو — علی محمدی — cust-001)
recurrence_type:      weekly
recurrence_count:     4 (۴ جلسه)
child_appointments:   apt-001 + 3 auto-generated children (+7, +14, +21 days)
```

---

## Demo-Mode Behavior Overrides

هنگامی که `NOWBAT_DEMO_MODE = true`:

| عملیات                         | رفتار عادی                  | رفتار دمو                                      |
| ------------------------------ | --------------------------- | ---------------------------------------------- |
| پرداخت ZarinPal                | redirect به ZarinPal        | DemoGateway — فوری paid                        |
| ارسال SMS                      | Kavenegar API call          | Demo-skip + log entry با status `demo_skipped` |
| DELETE /appointments/\*        | حذف رکورد                   | HTTP 403 + پیام توضیحی                         |
| DELETE /customers/\*           | حذف رکورد                   | HTTP 403 + پیام توضیحی                         |
| DELETE /services/\*            | حذف رکورد                   | HTTP 403 + پیام توضیحی                         |
| ثبت > ۱۰ نوبت از یک IP در ساعت | ممکن (با rate limit افزونه) | مسدود با transient                             |

---

## Data Reset Schedule

```
WP-Cron event:    nowbat_demo_reset
Frequency:        daily
Time:             03:00 Asia/Tehran
Action:           TRUNCATE all nowbat_* tables → re-run seed → clear transients
Log option:       nowbat_demo_last_reset → timestamp + 'success'/'failed'
```
