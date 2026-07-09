# Hoftalon Hospital de Olhos - Site

Redesign do site institucional do Hoftalon Hospital de Olhos (Londrina-PR). Home implementada.

## Stack
- HTML5
- Tailwind CSS (via CDN - ver Backlog para o swap de produção)
- JavaScript vanilla
- Google Fonts: Inter (400/500/600/700), Plus Jakarta Sans (600/700)

## Preview local
Abra `index.html` no navegador, ou rode um servidor local:
```bash
python -m http.server 8000
```
Depois acesse http://localhost:8000. No VS Code, a extensão "Live Server" também funciona.

## Estrutura
- `index.html` - Home (Header, Hero, Quick-actions, Especialidades, Reconhecimentos + Números, Unidades, Blog, CTA, Footer)
- `css/custom.css` - CSS custom alem do Tailwind (scroll-reveal, scrollbar-hide)
- `js/main.js` - JS vanilla (scroll-reveal, carrossel de especialidades com drag, filtro de unidades)
- `assets/` - `images/` (WebP), `videos/` (WebM + MP4 fallback), `brand/` (logos)
- `design_system/` - tokens (`tokens.css` / `tokens.json`), showcase (`showcase.html`)
- `docs/` - PRD, UX-Strategy, briefing
- `_archive/` - originais de mídia (pre-compressão), imagens não usadas, builds antigos (gitignored)

## Design System
Fonte visual em `design_system/`. Todo valor visual referencia tokens via `var(--...)` (`tokens.css`).
Cores da marca: primary `#0B9ECE`, secondary `#0A2A4A`, accent `#0D9488`, surface `#F2F9FD`.

## Otimização (Passo E aplicado)
- Imagens convertidas para WebP (18M → ~0.8M). Originais em `_archive/originals/`.
- Vídeo do hero em WebM (VP9, sem áudio) com fallback MP4.
- Fontes: só os pesos usados. Imagens não referenciadas arquivadas.

## Backlog (antes do deploy)
- **Tailwind CDN → CSS buildado + minificado** (`npx tailwindcss -i css/custom.css -o css/tailwind-build.css --minify`) para remover o runtime do CDN e o warning de produção.
- **Menu mobile:** o botão hamburguer ainda não abre um drawer - implementar a navegação mobile completa.
- **Interações pendentes:** toggle PT/EN, botão flutuante de WhatsApp, formulário de agendamento.
- **Placeholders a trocar:** fotos das especialidades e do blog, selos (WAEH/ONA/GPTW/Newsweek) e foto do CTA são temporários - cliente fornece os finais em alta resolução.
- **CNPJ** no footer é placeholder.
- **Páginas internas:** Sobre, Serviços, Unidades detalhadas, Blog, Portais - a implementar.
- Rodar Lighthouse na URL de produção (meta: Performance 95+, Acessibilidade ~100).

## Créditos
Desenvolvido por Caio Augusto Liutti - Londrina S/A.
