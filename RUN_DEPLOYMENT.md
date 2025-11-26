💡 دليل تشغيل الـ Deployment Scripts

# 🎯 الطريقة الأسهل - استخدم الـ Script

## خياراتك:

### ✅ الخيار 1: PowerShell Script (الأفضل)
```
1. اذهب للمشروع: E:\Windsirf-Test\test 2
2. اضغط رايت كليك في المجلد الفارغ
3. اختر: "Open PowerShell window here"
4. اكتب:
   .\deploy.ps1
5. اضغط Enter
```

### ✅ الخيار 2: Command Prompt Script
```
1. اذهب للمشروع: E:\Windsirf-Test\test 2
2. اضغط رايت كليك في المجلد الفارغ
3. اختر: "Open command window here"
4. اكتب:
   deploy.bat
5. اضغط Enter
```

### ✅ الخيار 3: يدويّاً (بدون Script)
```bash
cd "e:\Windsirf-Test\test 2"
npm install -g vercel
vercel --prod
```

---

## ماذا سيحدث عند تشغيل الـ Script؟

1. ✅ التحقق من Git موجود
2. ✅ التحقق من Node.js موجود
3. ✅ التحقق من Vercel CLI موجود (تنزيل إذا لم يكن موجود)
4. ✅ بناء المشروع (npm run build)
5. ✅ شروع الـ deploy على Vercel

---

## الأسئلة التي قد تُطلب:

```
1. بريدك على Vercel؟ → أدخل بريدك
2. كلمة السر؟ → أدخل كلمة السر
3. (قد تفتح صفحة تسجيل دخول - سجل)
4. Project root? → اضغط Enter (أو اكتب: .)
5. Modify vercel.json? → N
```

---

## 🎉 بعد الـ Deploy:

```
Your site is live at:
https://p-vita-about.vercel.app

أو المجال الذي اخترته
```

---

## ⚠️ إذا حدثت مشكلة:

### "PowerShell script not running"
```
أذن: Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
ثم جرب مرة أخرى
```

### "vercel: command not found"
```
npm install -g vercel
(ثم أعد تشغيل الـ Terminal)
```

### "Build failed"
```
cd "e:\Windsirf-Test\test 2"
npm install
npm run build
(تحقق من الـ errors)
```

---

## ✅ الـ Commit الحالي:

```
c2e5ecb feat: production-ready p-vita about page with team highlights and fixed images

Files:
- 60 files added
- All assets included
- Team images fixed
- Founders highlighted
- Ready to deploy!
```

---

**Ready? اختر طريقة وابدأ الـ deployment! 🚀**
