# clean-npm.ps1
Write-Host "=== LIMPIANDO PROYECTO ===" -ForegroundColor Yellow

# Detener procesos de node
Write-Host "Deteniendo procesos de Node..." -ForegroundColor Yellow
Get-Process -Name "node" -ErrorAction SilentlyContinue | Stop-Process -Force

# Eliminar node_modules
if (Test-Path "node_modules") {
    Write-Host "Eliminando node_modules..." -ForegroundColor Yellow
    Remove-Item -Recurse -Force node_modules
}

# Eliminar package-lock.json
if (Test-Path "package-lock.json") {
    Write-Host "Eliminando package-lock.json..." -ForegroundColor Yellow
    Remove-Item -Force package-lock.json
}

# Limpiar caché de vite
if (Test-Path "node_modules\.vite") {
    Write-Host "Eliminando caché de vite..." -ForegroundColor Yellow
    Remove-Item -Recurse -Force node_modules\.vite
}

# Limpiar caché de npm
Write-Host "Limpiando caché de npm..." -ForegroundColor Yellow
npm cache clean --force

# Reinstalar
Write-Host "`n=== REINSTALANDO DEPENDENCIAS ===" -ForegroundColor Green
npm install

# Instalar canvas-confetti específicamente
Write-Host "`n=== INSTALANDO CANVAS-CONFETTI ===" -ForegroundColor Green
npm install canvas-confetti
npm install --save-dev @types/canvas-confetti

Write-Host "`n=== ¡LISTO! ===" -ForegroundColor Green
Write-Host "Ahora ejecuta: npm run dev" -ForegroundColor Cyan