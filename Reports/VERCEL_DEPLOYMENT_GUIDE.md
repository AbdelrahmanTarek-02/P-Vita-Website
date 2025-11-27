# 🚀 VERCEL DEPLOYMENT - خطوات دقيقة

## المتطلبات:
- ✅ حساب GitHub (مجاني)
- ✅ حساب Vercel (مجاني)
- ✅ Project موجود على GitHub

---

## الخطوة 1️⃣: إعداد GitHub (إذا لم تكن أنت بالفعل موجود)

### أ) تنزيل Git (إذا لم تكن موجود):
```bash
# تحقق إذا كان موجود:
git --version

# إذا لم يظهر نسخة، نزل من:
https://git-scm.com/download/win
```

### ب) تعريف نفسك على Git (مرة واحدة فقط):
```bash
git config --global user.name "اسمك"
git config --global user.email "بريدك@example.com"

# مثال:
git config --global user.name "Ahmed"
git config --global user.email "ahmed@email.com"
```

---

## الخطوة 2️⃣: حضر المشروع للـ Commit

```bash
# اذهب للمجلد
cd "e:\Windsirf-Test\test 2"

# تحقق من الحالة
git status

# أضف كل الملفات
git add .

# تأكد من التغييرات
git status
```

---

## الخطوة 3️⃣: Commit التغييرات

```bash
git commit -m "fix: team images paths and add founders highlight section"
```

---

## الخطوة 4️⃣: رفع الكود على GitHub

### أ) إنشء Repository على GitHub:
1. اذهب: https://github.com/new
2. اسم المشروع: `p-vita-about`
3. اختر: Public (عشان Vercel يقدر يوصل)
4. لا تختر "Initialize with README"
5. اضغط "Create repository"

### ب) رفع الكود:
```bash
# نسخ الأوامر من GitHub (تقريباً):
git remote add origin https://github.com/yourusername/p-vita-about.git
git branch -M main
git push -u origin main
```

**استبدل `yourusername` باسم حسابك GitHub**

---

## الخطوة 5️⃣: Deploy على Vercel

### أ) إنشاء حساب Vercel:
1. اذهب: https://vercel.com
2. اضغط "Sign Up"
3. اختر "Continue with GitHub"
4. أعط Vercel الصلاحيات

### ب) Import المشروع:
1. بعد تسجيل الدخول، اضغط "New Project"
2. اختر Repository: `p-vita-about`
3. اترك الإعدادات كما هي (Vercel يكتشفها تلقائياً)
4. اضغط "Deploy"

### ج) انتظر:
```
🎉 Deployed!
Your site is live at: https://p-vita-about.vercel.app
```

---

## AUTOMATED SCRIPT (أوتومتك)

سأعملك script يعمل معظم الخطوات:

