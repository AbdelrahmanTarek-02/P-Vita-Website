@echo off
REM P-Vita Vercel Deployment Script
REM هذا الـ script يساعدك في رفع المشروع على GitHub و Vercel

echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║  P-VITA DEPLOYMENT AUTOMATION SCRIPT                        ║
echo ║  رفع المشروع على GitHub و Vercel بشكل أوتومتك             ║
echo ╚════════════════════════════════════════════════════════════╝
echo.

REM التحقق من Git
echo [1/4] التحقق من Git...
git --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Git غير موجود! نزل من https://git-scm.com/download/win
    pause
    exit /b 1
)
echo ✅ Git موجود

REM التحقق من Node
echo [2/4] التحقق من Node.js...
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js غير موجود! نزل من https://nodejs.org
    pause
    exit /b 1
)
echo ✅ Node.js موجود

REM التحقق من Vercel CLI
echo [3/4] التحقق من Vercel CLI...
vercel --version >nul 2>&1
if errorlevel 1 (
    echo ⚠️  Vercel CLI غير موجود. التنزيل الآن...
    call npm install -g vercel
)
echo ✅ Vercel CLI موجود

REM Deploy على Vercel
echo [4/4] بدء الـ deployment...
echo.
echo 📝 تعليمات:
echo 1. ستُطلب منك بريدك وكلمة السر في Vercel
echo 2. اختر: "y" للـ project root
echo 3. اختر: "n" لـ "Modify vercel.json?"
echo.
pause

cd /d "E:\Windsirf-Test\test 2"
vercel --prod

echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║  🎉 DEPLOYMENT COMPLETE!                                    ║
echo ║  موقعك الجديد سيكون على:                                     ║
echo ║  https://p-vita-about.vercel.app                            ║
echo ║  أو المجال المخصص الذي اخترته                               ║
echo ╚════════════════════════════════════════════════════════════╝
echo.
pause
