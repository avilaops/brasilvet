// Script Node.js para enviar email via SendGrid
// Instale com: npm install @sendgrid/mail

const sgMail = require('@sendgrid/mail');

// Configurações
sgMail.setApiKey('7Aciqgr7@3278579');

const msg = {
  to: 'ericvgstival@gmail.com',
  from: 'nicolas@avila.inc',
  subject: '🐮 Brasilvet - Projeto Completo de Site Veterinário | Apresentação',
  html: `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); padding: 20px; line-height: 1.6; }
        .container { max-width: 800px; margin: 0 auto; background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.15); }
        .header { background: linear-gradient(135deg, #2D5016 0%, #6B4423 100%); padding: 60px 40px; text-align: center; color: white; }
        .logo { width: 120px; height: 120px; background: #F4A900; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; font-size: 64px; font-weight: bold; color: #2D5016; }
        .header h1 { font-size: 48px; margin-bottom: 10px; }
        .badge { display: inline-block; background: #F4A900; color: #2D5016; padding: 8px 20px; border-radius: 20px; font-size: 14px; font-weight: bold; margin-top: 15px; }
        .content { padding: 50px 40px; }
        .btn { display: inline-block; background: #F4A900; color: #2D5016; padding: 15px 40px; border-radius: 50px; text-decoration: none; font-weight: bold; margin: 10px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">B</div>
            <h1>🐮 BRASILVET</h1>
            <p>Projeto Completo - Site Veterinário</p>
            <span class="badge">28 Anos de Tradição</span>
        </div>
        <div class="content">
            <h2>Olá! 👋</h2>
            <p>Projeto Brasilvet completo desenvolvido com:</p>
            <ul>
                <li>✅ 2000+ linhas de CSS</li>
                <li>✅ 650+ linhas de JavaScript</li>
                <li>✅ 16+ seções funcionais</li>
                <li>✅ Design responsivo</li>
                <li>✅ SEO completo</li>
            </ul>
            <p style="margin-top: 30px;">
                <a href="https://avilaops.github.io/brasilvet/" class="btn">🌐 Ver Site Online</a>
                <a href="https://github.com/avilaops/brasilvet" class="btn">📂 GitHub</a>
            </p>
            <p style="margin-top: 30px; color: #666;">
                <strong>Contato:</strong> nicolas@avila.inc<br>
                <strong>WhatsApp Brasilvet:</strong> (17) 99733-9566
            </p>
        </div>
    </div>
</body>
</html>
  `,
};

sgMail
  .send(msg)
  .then(() => {
    console.log('✅ Email enviado com sucesso!');
  })
  .catch((error) => {
    console.error('❌ Erro:', error);
  });
