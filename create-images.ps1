Add-Type -AssemblyName System.Drawing

# Create hero-bg.jpg
$img = New-Object System.Drawing.Bitmap 1920, 1080
$graphics = [System.Drawing.Graphics]::FromImage($img)
$brush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(27, 53, 36))
$graphics.FillRectangle($brush, 0, 0, 1920, 1080)
$img.Save("e:\Windsirf-Test\test 2\public\images\hero-bg.jpg")
$graphics.Dispose()
$img.Dispose()

# Create about-preview.jpg
$img2 = New-Object System.Drawing.Bitmap 1000, 600
$graphics2 = [System.Drawing.Graphics]::FromImage($img2)
$brush2 = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(45, 124, 89))
$graphics2.FillRectangle($brush2, 0, 0, 1000, 600)
$img2.Save("e:\Windsirf-Test\test 2\public\images\about-preview.jpg")
$graphics2.Dispose()
$img2.Dispose()

Write-Host "Images created successfully"
