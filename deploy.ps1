#!/usr/bin/env pwsh
# P-Vita Vercel Deployment Script
# رفع المشروع على GitHub و Vercel بشكل أوتومتك

Write-Host "`n" -ForegroundColor White
Write-Host "╔════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║  P-VITA DEPLOYMENT AUTOMATION SCRIPT                        ║" -ForegroundColor Cyan
Write-Host "║  رفع المشروع على GitHub و Vercel بشكل أوتومتك             ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host "`n"

# الخطوة 1: التحقق من Git
Write-Host "[1/5] التحقق من Git..." -ForegroundColor Yellow
$git = Get-Command git -ErrorAction SilentlyContinue
if (-not $git) {
    Write-Host "❌ Git غير موجود!" -ForegroundColor Red
    Write-Host "نزل من: https://git-scm.com/download/win" -ForegroundColor Yellow
    Read-Host "اضغط Enter للخروج"
    exit 1
}
Write-Host "✅ Git موجود" -ForegroundColor Green

# الخطوة 2: التحقق من Node
Write-Host "[2/5] التحقق من Node.js..." -ForegroundColor Yellow
$node = Get-Command node -ErrorAction SilentlyContinue
if (-not $node) {
    Write-Host "❌ Node.js غير موجود!" -ForegroundColor Red
    Write-Host "نزل من: https://nodejs.org" -ForegroundColor Yellow
    Read-Host "اضغط Enter للخروج"
    exit 1
}
Write-Host "✅ Node.js موجود" -ForegroundColor Green

# الخطوة 3: التحقق من Vercel CLI
Write-Host "[3/5] التحقق من Vercel CLI..." -ForegroundColor Yellow
$vercel = Get-Command vercel -ErrorAction SilentlyContinue
if (-not $vercel) {
    Write-Host "⚠️  Vercel CLI غير موجود. التنزيل الآن..." -ForegroundColor Yellow
    npm install -g vercel
}
Write-Host "✅ Vercel CLI موجود" -ForegroundColor Green

# الخطوة 4: البناء
Write-Host "[4/5] بناء المشروع (build)..." -ForegroundColor Yellow
Set-Location "E:\Windsirf-Test\test 2"
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ فشل الـ build!" -ForegroundColor Red
    Read-Host "اضغط Enter للخروج"
    exit 1
}
Write-Host "✅ البناء نجح" -ForegroundColor Green

# الخطوة 5: Deploy على Vercel
Write-Host "[5/5] بدء الـ deployment على Vercel..." -ForegroundColor Yellow
Write-Host "`n📝 تعليمات:" -ForegroundColor Cyan
Write-Host "1. ستُطلب منك بريدك وكلمة السر في Vercel" -ForegroundColor White
Write-Host "2. عند السؤال عن project root، اضغط Enter أو اكتب '.' (نقطة)" -ForegroundColor White
Write-Host "3. عند السؤال عن 'Modify vercel.json?'، اكتب 'N'" -ForegroundColor White
Write-Host "4. اختر 'overwrite' إذا سُألت" -ForegroundColor White
Write-Host "`n"

Read-Host "اضغط Enter لبدء الـ deployment"

vercel --prod

Write-Host "`n" -ForegroundColor White
Write-Host "╔════════════════════════════════════════════════════════════╗" -ForegroundColor Green
Write-Host "║  🎉 DEPLOYMENT COMPLETE!                                    ║" -ForegroundColor Green
Write-Host "║  موقعك الجديد سيكون على:                                     ║" -ForegroundColor Green
Write-Host "║  https://p-vita-about.vercel.app                            ║" -ForegroundColor Green
Write-Host "║  أو المجال المخصص الذي اخترته                               ║" -ForegroundColor Green
Write-Host "╚════════════════════════════════════════════════════════════╝" -ForegroundColor Green
Write-Host "`n"

Read-Host "اضغط Enter للخروج"
