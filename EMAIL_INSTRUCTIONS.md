# 📧 INSTRUÇÕES PARA ENVIO DO EMAIL - PROJETO BRASILVET

## ⚠️ Problema Identificado
A API key fornecida (`7Aciqgr7@3278579`) não é válida para o SendGrid.
As chaves da API do SendGrid devem começar com `SG.`

## 🔑 Como Obter a API Key Correta do SendGrid

1. **Acesse:** https://app.sendgrid.com/
2. **Login com:** nicolas@avila.inc
3. **Vá em:** Settings → API Keys
4. **Crie uma nova:** Create API Key
   - Name: `Brasilvet Email`
   - Permissions: Full Access
5. **Copie a chave** (começa com `SG.`)

## 🚀 Opção 1: Enviar via Script Node.js

Depois de obter a API key correta:

```bash
# 1. Edite o arquivo send_email.js
# Substitua a linha:
sgMail.setApiKey('SUA_API_KEY_AQUI');

# 2. Execute:
node send_email.js
```

## 📨 Opção 2: Enviar Manualmente via Interface SendGrid

1. Acesse: https://app.sendgrid.com/
2. Vá em **Marketing → Single Sends**
3. Clique em **Create Single Send**
4. Configure:
   - **To:** ericvgstival@gmail.com
   - **From:** nicolas@avila.inc
   - **Subject:** 🐮 Brasilvet - Projeto Completo de Site Veterinário | Apresentação
5. **Cole o HTML** do arquivo `email_template.html` que criei
6. Clique em **Send**

## 🌐 Opção 3: Compartilhar Links Diretamente

Você pode simplesmente enviar um email normal com estes links:

**Assunto:** 🐮 Brasilvet - Projeto Completo Finalizado

**Corpo:**
```
Olá!

O projeto Brasilvet está completo e publicado! 🚀

🌐 Site Online: https://avilaops.github.io/brasilvet/
📂 GitHub: https://github.com/avilaops/brasilvet

📊 Números do Projeto:
- 2000+ linhas de CSS
- 650+ linhas de JavaScript
- 16+ seções funcionais
- Design 100% responsivo
- SEO completo com meta tags

✨ Funcionalidades:
✅ Vídeo hero em autoplay (como GIF)
✅ Calculadora de ROI interativa
✅ WhatsApp integrado
✅ FAQ accordion
✅ Timer de ofertas
✅ Formulário de contato
✅ Modal de vídeos
✅ Estatísticas animadas

📞 Contato Brasilvet:
- Telefone: (17) 3388-0202
- WhatsApp: (17) 99733-9566
- Email: atendimento@brasilvet.com.br
- Endereço: BR 153 km 52, São José do Rio Preto - SP

Qualquer dúvida, estou à disposição!

Att,
Eric Avila
nicolas@avila.inc
```

## 📄 Arquivos Criados

- ✅ `send_email.py` - Script Python (requer Python + SendGrid)
- ✅ `send_email.js` - Script Node.js (requer Node + SendGrid)
- ✅ `email_template.html` - Template HTML completo do email
- ✅ Este README com instruções

## 🔧 Credenciais Corretas Necessárias

Para usar SendGrid, você precisa:
- ✅ Email verificado no SendGrid: nicolas@avila.inc
- ✅ API Key válida (começa com `SG.`)
- ✅ Domínio verificado (se usar email customizado)

## 💡 Alternativa: Outlook/Gmail

Se preferir, pode copiar o HTML do `email_template.html` e enviar via:
- Outlook Web
- Gmail (modo HTML)
- Qualquer cliente de email que suporte HTML

---

**Desenvolvido por Eric Avila**
GitHub: @avilaops
