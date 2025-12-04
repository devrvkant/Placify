export const VERIFICATION_EMAIL_TEMPLATE = `
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Verify your email</title>

  <!-- IMPORTANT: many email clients ignore CSS variables and advanced color models.
       We keep your CSS variables for maintainability and also provide solid fallbacks. -->
  <style>
    /* Basic reset */
    body,table,td,a{ -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; }
    table,td{ mso-table-lspace:0pt; mso-table-rspace:0pt; }
    img{ -ms-interpolation-mode:bicubic; display:block; border:0; outline:none; text-decoration:none; }
    a[x-apple-data-detectors]{ color:inherit !important; text-decoration:none !important; }

    /* Theme variables (fallback hex colors included) */
    :root{
      --bg: #ffffff; /* fallback */
      --fg: #111827;
      --card: #ffffff;
      --muted: #6b7280;
      --primary: #6C4BFF; /* nice purple */
      --primary-foreground: #ffffff;
      --border: #E6E7EB;
      --radius: 12px;
      --font-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    }

    /* Use your provided theme variables (kept here for reference) */
    /* you can keep them or remove; some clients ignore them */
    /* --background: oklch(0.9842 0.0034 247.8575); ... */

    body {
      margin: 0;
      padding: 0;
      background-color: var(--bg);
      color: var(--fg);
      font-family: var(--font-sans);
      -webkit-font-smoothing:antialiased;
    }

    .email-wrapper {
      width: 100%;
      background-color: var(--bg);
      padding: 24px 12px;
    }

    .email-card {
      max-width: 680px;
      margin: 0 auto;
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      box-shadow: 0 8px 24px rgba(15,23,42,0.06);
      overflow: hidden;
    }

    .hero {
      padding: 28px 32px;
      text-align: left;
    }

    .logo {
      width: 140px;
      height: auto;
      margin-bottom: 12px;
    }

    .title {
      margin: 6px 0 0 0;
      font-size: 20px;
      font-weight: 700;
      color: var(--fg);
      line-height: 1.2;
    }

    .subtitle {
      margin: 10px 0 0 0;
      color: var(--muted);
      font-size: 14px;
      line-height: 1.5;
    }

    .content {
      padding: 0 32px 32px;
      font-size: 16px;
      color: var(--fg);
      line-height: 1.6;
    }

    .btn-wrap {
      padding: 20px 32px 8px;
    }

    .btn {
      display: inline-block;
      text-decoration: none;
      background: var(--primary, #6C4BFF);
      color: #FFFFFF !important;
      padding: 12px 20px;
      border-radius: 8px;
      font-weight: 600;
      font-size: 16px;
    }

    .muted {
      color: var(--muted);
      font-size: 13px;
      margin-top: 12px;
    }

    .footer {
      padding: 20px 24px;
      background: transparent;
      border-top: 1px solid var(--border);
      font-size: 13px;
      color: var(--muted);
      text-align: center;
    }

    .small {
      font-size: 12px;
      color: var(--muted);
    }

    /* Responsive */
    @media only screen and (max-width: 520px){
      .hero, .content, .btn-wrap { padding-left: 20px !important; padding-right: 20px !important; }
      .logo { width: 120px; }
      .title { font-size: 18px; }
      .btn { width: 100%; text-align: center; display: block; padding: 14px 16px; }
    }
  </style>
</head>
<body>
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" class="email-wrapper">
    <tr>
      <td align="center">
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" class="email-card">
          <!-- Header / brand -->
          <tr>
            <td class="hero" style="background:linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0.95));">
              <!-- Logo -->
              <img src="{{LOGO_URL}}" alt="{{APP_NAME}} logo" class="logo" style="max-width:140px; width:140px; height:auto;" onerror="this.style.display='none'">
              <h1 class="title">Verify your email to activate your {{APP_NAME}} account</h1>
              <p class="subtitle">Hi {{FULL_NAME}}, thanks for signing up — one more step to secure your account.</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td class="content">
              <p>We need to confirm that <strong>{{FULL_NAME}}</strong> is the owner of this email address. Click the button below to verify your email and continue the signup process.</p>

              <div class="btn-wrap">
                <!-- button -->
                <a href="{{VERIFY_URL}}" class="btn" target="_blank" rel="noopener noreferrer">Verify Email</a>
              </div>

              <p class="muted">If the button doesn't work, copy and paste the following link into your browser:</p>
              <p class="small" style="word-break:break-all;"><a href="{{VERIFY_URL}}" style="color:var(--primary); text-decoration: none;">{{VERIFY_URL}}</a></p>

              <hr style="border: none; border-top: 1px solid var(--border); margin:20px 0;">

              <p>If you did not create a {{APP_NAME}} account, you can ignore this email — no action is required.</p>

              <p class="muted">Need help? Contact our support team at <a href="mailto:{{SUPPORT_EMAIL}}" style="color: #6C4BFF !important; text-decoration:none;"><span style="color: #6C4BFF !important;">{{SUPPORT_EMAIL}}</span></a></p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td class="footer">
              <div style="margin-bottom:6px;">
                <span style="font-weight:600;">{{APP_NAME}}</span> &middot; <span class="small">Building meaningful connections between students and opportunities</span>
              </div>
              <div class="small" style="margin-top:8px;">
                © {{YEAR}} {{APP_NAME}}. All rights reserved.
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
