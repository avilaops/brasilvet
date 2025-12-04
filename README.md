# 🎯 BRASILVET - V.M-SAL PLUS
## Site de Vendas de Alta Conversão

### 📁 Estrutura do Projeto

```
Brasilvet/
├── index.html                 # Página principal
├── assets/
│   ├── css/
│   │   └── style.css         # Estilos completos
│   ├── js/
│   │   └── main.js           # JavaScript interativo
│   ├── images/               # Imagens e fotos
│   │   ├── logo.svg
│   │   ├── logo-white.svg
│   │   ├── favicon.png
│   │   ├── og-image.jpg
│   │   ├── product-premium.jpg
│   │   ├── product-reproducao.jpg
│   │   ├── product-manutencao.jpg
│   │   ├── testimonial-marcelo.jpg
│   │   ├── testimonial-ana.jpg
│   │   └── testimonial-jose.jpg
│   └── videos/
│       └── hero-rebanho.mp4  # Vídeo de fundo do hero
└── README.md                  # Este arquivo
```

---

## 🚀 Funcionalidades Implementadas

### ✅ Completo e Funcional

#### 1. **Hero Section Impactante**
- Vídeo de fundo profissional
- Headline otimizada para conversão
- CTAs estratégicos (2 botões)
- Badge de 25 anos de tradição
- Features visuais (77+ produtos, Registro MAPA, Entrega garantida)

#### 2. **Barra de Notificação Social Proof**
- Atualização automática a cada 8 segundos
- Nomes e localizações aleatórios
- Cria senso de urgência e prova social

#### 3. **Header Responsivo**
- Sticky header com efeito ao scroll
- Menu mobile funcional
- Logo + navegação + CTA

#### 4. **Estatísticas Animadas**
- 4 cards com números de impacto
- Animação de contagem ao entrar na viewport
- 77 produtos, 1560 clientes, 25 anos, 4.9 estrelas

#### 5. **Seção de Problemas**
- 6 cards com problemas comuns
- Ícones com X vermelho
- Layout grid responsivo

#### 6. **Seção de Benefícios**
- 6 cards com soluções
- Ícones com ✓ verde
- Métricas de resultado (ROI, ganho de peso, etc.)
- Box de garantia 100%

#### 7. **Como Funciona (3 Passos)**
- Infográfico visual
- Números destacados
- Setas de fluxo
- Seção de vídeo demo

#### 8. **Depoimentos em Vídeo**
- 3 cards de clientes reais
- Play buttons funcionais
- Avaliação 5 estrelas
- Resultados quantificados

#### 9. **Calculadora de ROI Interativa**
- Input: número de animais, peso médio, meses
- Cálculo automático de:
  - Ganho de peso extra
  - Receita extra
  - Investimento
  - Lucro líquido
- CTA direto após resultado

#### 10. **Catálogo de Produtos**
- 3 produtos com variações
- Badge "MAIS VENDIDO"
- Fotos, descrição, features
- Preço com desconto
- Botão "Adicionar ao Carrinho"

#### 11. **Oferta com Timer de Urgência**
- Countdown funcional (24h)
- Persiste em localStorage
- 4 benefícios exclusivos
- CTA gigante com WhatsApp
- Selos de confiança

#### 12. **FAQ Accordion**
- 8 perguntas frequentes
- Abertura/fechamento suave
- CTA para falar com especialista

#### 13. **Informações Técnicas**
- 4 cards: Certificações, Composição, Dosagem, Embalagem
- Dados técnicos reais
- Layout profissional

#### 14. **Footer Completo**
- Logo + tagline
- Links de navegação
- Redes sociais
- Contato completo
- Formas de pagamento
- CNPJ e registro MAPA

#### 15. **Elementos Flutuantes**
- Botão WhatsApp com pulse animation
- Botão "Voltar ao topo" (aparece após scroll)
- Ambos com efeitos hover

#### 16. **Modal de Vídeo**
- Lightbox para vídeos de depoimentos
- Fechar com ESC ou clique fora
- Responsivo

---

## 🎨 Identidade Visual Aplicada

### Cores
- **Verde Agro**: `#2D5016` (primária)
- **Marrom Terra**: `#6B4423` (secundária)
- **Amarelo Ouro**: `#F4A900` (destaques)
- **Laranja**: `#E07B39` (CTAs de urgência)
- **Verde Sucesso**: `#28A745` (benefícios)
- **Vermelho Erro**: `#DC3545` (problemas)

### Tipografia
- **Títulos**: Montserrat (Bold, 700, 800)
- **Textos**: Open Sans (400, 600, 700)

### Elementos Visuais
- Ícones Font Awesome 6.5.1
- Shadows em 4 níveis
- Border radius variável
- Gradientes em botões e seções

---

## ⚙️ Funcionalidades JavaScript

### Implementadas e Testadas
- ✅ Scroll header (sticky + shadow)
- ✅ Menu mobile toggle
- ✅ Animated counters (intersection observer)
- ✅ FAQ accordion
- ✅ Calculadora ROI com validação
- ✅ Timer de oferta (24h) com localStorage
- ✅ Barra de notificação dinâmica
- ✅ Back to top button
- ✅ Smooth scroll para âncoras
- ✅ Video modal (lightbox)
- ✅ Form validations
- ✅ Add to cart com feedback
- ✅ Scroll animations (fade in up)
- ✅ Analytics tracking (estrutura pronta)
- ✅ Lazy loading de imagens

---

## 📱 Responsividade

### Breakpoints
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

### Ajustes Responsivos
- Grid adaptativo em todas as seções
- Menu mobile funcional
- Fontes escaláveis
- Botões adaptados
- Espaçamentos otimizados
- Timer de oferta empilhado em mobile
- Depoimentos em coluna única

---

## 🔧 Como Usar

### 1. **Configuração Inicial**

```bash
# Clone ou baixe o projeto
cd Brasilvet

# Estrutura de pastas (criar se não existir)
mkdir -p assets/css assets/js assets/images assets/videos
```

### 2. **Adicionar Assets**

**Imagens Necessárias:**
- `assets/images/logo.svg` - Logo colorido
- `assets/images/logo-white.svg` - Logo branco para footer
- `assets/images/favicon.png` - Ícone do site (32x32px)
- `assets/images/og-image.jpg` - Para compartilhamento redes sociais (1200x630px)
- `assets/images/product-premium.jpg` - Foto do produto Premium
- `assets/images/product-reproducao.jpg` - Foto do produto Reprodução
- `assets/images/product-manutencao.jpg` - Foto do produto Manutenção
- `assets/images/testimonial-marcelo.jpg` - Foto do cliente Marcelo
- `assets/images/testimonial-ana.jpg` - Foto da cliente Ana
- `assets/images/testimonial-jose.jpg` - Foto do cliente José

**Vídeos Necessários:**
- `assets/videos/hero-rebanho.mp4` - Vídeo de fundo (1920x1080, max 5MB)

### 3. **Configurar Integrações**

#### WhatsApp
Substituir `5562999999999` pelo número real em:
- Linha 53 (index.html) - Hero CTA
- Linha 558 (index.html) - Oferta
- Linha 759 (index.html) - FAQ
- Linha 803 (index.html) - Footer
- Linha 826 (index.html) - Botão flutuante

#### Vídeos YouTube
Substituir `VIDEO_ID` pelos IDs reais:
- Linha 390 (index.html) - Vídeo demo
- Linha 436, 464, 492 (index.html) - Depoimentos
- Linha 329-335 (main.js) - Modal URLs

#### Analytics
Adicionar antes de `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>

<!-- Facebook Pixel -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'XXXXXXXXXXXXXXXXX');
  fbq('track', 'PageView');
</script>
```

### 4. **Deploy**

#### Opção 1: Hospedagem Tradicional
- Upload via FTP para servidor
- Configurar domínio: www.brasilvet.com.br
- Certificado SSL obrigatório (HTTPS)

#### Opção 2: GitHub Pages (Grátis)
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/brasilvet.git
git push -u origin main

# Ativar GitHub Pages em Settings > Pages
# Source: main branch
```

#### Opção 3: Netlify/Vercel (Recomendado)
- Drag & drop da pasta no Netlify
- Domínio customizado automático
- SSL gratuito
- Deploy automático

---

## 🎯 Estratégias de Conversão Implementadas

### Gatilhos Mentais
1. **Escassez**: Timer de 24h para oferta
2. **Urgência**: "Oferta Relâmpago" + contador
3. **Prova Social**: 1.560 clientes + notificações em tempo real
4. **Autoridade**: 25 anos de experiência + Registro MAPA
5. **Reciprocidade**: Consultoria grátis por 3 meses
6. **Garantia**: 60 dias ou dinheiro de volta

### CTAs Estratégicos
- **12 CTAs** distribuídos estrategicamente
- Cores contrastantes (verde, laranja)
- Textos orientados a ação ("Garantir", "Aproveitar")
- Ícones que reforçam a ação

### Prova Social
- Números grandes (1.560 clientes)
- Depoimentos em vídeo com resultados quantificados
- Avaliação 4.9 estrelas
- Notificações de compras em tempo real

### Redução de Fricção
- WhatsApp direto (sem formulários complexos)
- Calculadora mostra valor antes de comprar
- FAQ responde objeções
- Garantia de 60 dias elimina risco

---

## 📊 Métricas para Acompanhar

### KPIs Principais
1. **Taxa de Conversão**: Visitantes → Leads (meta: 3-5%)
2. **Taxa de Cliques nos CTAs**: % de cliques nos botões principais
3. **Tempo na Página**: Média de 2-3 minutos
4. **Scroll Depth**: % de usuários que chegam à oferta
5. **Taxa de Rejeição**: Abaixo de 60%

### Eventos para Trackear
- Visualização de seção (Hero, Benefícios, Oferta)
- Cliques em CTAs específicos
- Uso da calculadora
- Visualização de vídeos
- Cliques no WhatsApp
- Scroll depth (25%, 50%, 75%, 100%)

---

## 🔄 Próximos Passos (Opcional)

### Fase 2 - Otimizações
- [ ] A/B testing de headlines
- [ ] Chatbot com IA
- [ ] Sistema de carrinho real
- [ ] Integração com gateway de pagamento
- [ ] Blog com conteúdo SEO
- [ ] Área de membros/clientes

### Fase 3 - Marketing
- [ ] Campanha Google Ads
- [ ] Campanha Facebook/Instagram Ads
- [ ] E-mail marketing automation
- [ ] Remarketing
- [ ] Programa de afiliados

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Semântica moderna
- **CSS3**: Grid, Flexbox, Animations, Custom Properties
- **JavaScript ES6+**: Modules, Arrow Functions, Async
- **Font Awesome 6.5.1**: Ícones
- **Google Fonts**: Montserrat + Open Sans

---

## 📞 Suporte Técnico

Para dúvidas sobre o código ou customizações:
1. Revise este README completo
2. Verifique os comentários no código
3. Teste localmente antes de fazer deploy

---

## 📄 Licença

© 2025 Brasilvet - Todos os direitos reservados.

---

## ✨ Resultado Final

Um site de vendas **profissional**, **otimizado para conversão** e **pronto para gerar resultados**.

**Principais Diferenciais:**
- ✅ Design moderno e limpo
- ✅ Totalmente responsivo
- ✅ Carregamento rápido
- ✅ SEO otimizado
- ✅ 12+ CTAs estratégicos
- ✅ Gatilhos mentais aplicados
- ✅ Prova social abundante
- ✅ Calculadora de ROI única
- ✅ Integração WhatsApp facilitada

**Meta de Conversão**: 3-5% de visitantes para leads qualificados (WhatsApp)

---

**Desenvolvido com foco em RESULTADOS para Brasilvet - V.M-SAL PLUS** 🚀🐄
