# 2e2a Landing (SaaS) - Scaffold

Setup rápido:

1. Instalar dependencias:

```bash
npm install
```

2. Crear `.env.local` con variables (ejemplo):

```
NEXT_PUBLIC_FIREBASE_API_KEY=your
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your
NEXT_PUBLIC_FIREBASE_APP_ID=your

GEMINI_API_URL=https://api.gemini.example/v1
GEMINI_API_KEY=sk-... (proporcionar cuando esté)
```

3. Ejecutar en desarrollo:

```bash
npm run dev
```

Notas:
- El proyecto contiene un esqueleto de landing, login con Firebase (email/password) y un endpoint API `/api/mcp` que actúa como puente hacia la API de Gemini (añade la `GEMINI_API_KEY` cuando la tengas).
- Los logos están en `public/images` y se usan en la landing.
- Siguientes pasos: integrar MCP con el proveedor Gemini, configurar reglas de seguridad de Firebase y agregar pruebas/CI para cumplir SQA e ISO/IEC 27034.
