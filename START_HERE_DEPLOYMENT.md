# ✅ خطوات الـ DEPLOYMENT - النسخة المختصرة

## الوضع الحالي:
✅ المشروع محفوظ محلياً مع git  
✅ كل الملفات موجودة  
✅ الـ build نجح  
✅ صور الفريق تظهر  

---

## الخطوات الـ 5 النهائية:

### 1️⃣ إنشاء Repository على GitHub
```
اذهب: https://github.com/new
اسم: p-vita-about
اختر: Public
اضغط: Create Repository
```

### 2️⃣ ربط المشروع بـ GitHub
```bash
# نسخ هذا الأمر من GitHub (في الصفحة):
git remote add origin https://github.com/YOUR_USERNAME/p-vita-about.git
git branch -M main
git push -u origin main
```

### 3️⃣ إنشاء حساب Vercel
```
اذهب: https://vercel.com/signup
اختر: Continue with GitHub
```

### 4️⃣ Deploy على Vercel
```bash
npm install -g vercel
cd "e:\Windsirf-Test\test 2"
vercel --prod
```

### 5️⃣ أجب على الأسئلة:
```
Set up and deploy? → y
Project name? → p-vita-about
```

---

## 🎉 النتيجة:
```
Your site is live at: https://p-vita-about.vercel.app
```

---

## البديل الأسهل: استخدم الـ Script

```bash
# Windows PowerShell:
.\deploy.ps1

# أو دبل كليك على:
# deploy.ps1 (الأفضل)
```

---

**Just 5 steps and you're done!** 🚀
