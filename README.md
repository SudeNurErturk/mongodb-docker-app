# 🔐 AWS Secret Manager Demo

Bu proje, AWS Secrets Manager kullanarak uygulama sırlarını (parolalar, API anahtarları vb.) **güvenli ve merkezi** olarak yönetmeyi hedefleyen bir demo uygulamadır.

---

## 🎯 Proje Amacı

- **Sırların kod içinde hard‑coded** şekilde saklanmamasını sağlamak  
- AWS SDK kullanarak çalışma zamanında **programatik olarak sırları çekmek**  
- **KMS ile şifreleme**, TLS üzerinden güvenli iletişim ve IAM ile erişim kontrolü gibi AWS güvenlik prensiplerini uygulamak :contentReference[oaicite:1]{index=1}  

---

## 🛠️ Kullanılan Teknolojiler

- AWS Secrets Manager  
- AWS SDK (Node.js / Python / Java – projenin diline göre belirt)  
- Opsiyonel: Docker Setup veya AWS CLI entegrasyonu

---

## 📚 En İyi Uygulamalar (Best Practices)

1. **Sırları kod içinde bulundurmamak**; Secrets Manager ile saklamak :contentReference[oaicite:2]{index=2}  
2. **KMS ile envelope encryption** kullanarak veriyi şifreli olarak depolamak :contentReference[oaicite:3]{index=3}  
3. **Client-side caching** ile SDK üzerinden gelen sırları önbelleğe almak; hem hız hem maliyet kazanımı sağlar :contentReference[oaicite:4]{index=4}  
4. IAM politikalarında **least privilege** (sadece gerekli izinleri verme) ilkesine sadık kalmak :contentReference[oaicite:5]{index=5}  
5. **Sırlarda otomatik rotation** kullanmak (örn. AWS Lambda ile planlı güncelleme) :contentReference[oaicite:6]{index=6}

---

## 🧩 Nasıl Çalışır?

1. Sisteme sırları kaydedersiniz (örneğin: `"MyAppSecret"` içinde JSON olarak DB şifresi, API anahtarı vb.).  
2. Uygulama başlatıldığında AWS SDK ile `GetSecretValue` çağrısı yapılır :contentReference[oaicite:7]{index=7}.  
3. Gelen JSON/parola işlem için belleğe alınır, dosyaya yazılmaz.  
4. Sırlara erişim IAM rolü veya kimlik bilgisiyle sağlanır.  
5. Güncellendiğinde caching temizlenerek güncel versiyon alınır.

---

## 📦 Kurulum & Çalıştırma (Örnek: Node.js)

```bash
git clone https://github.com/SudeNurErturk/AWS_SecretManager.git
cd AWS_SecretManager

# AWS yetkilendirme ayarları (env veya IAM rolü)
export AWS_ACCESS_KEY_ID=...
export AWS_SECRET_ACCESS_KEY=...
export AWS_REGION=eu-central-1

# Node.js örneğinde paketi kur ve demo script çalıştır
npm install
node index.js SECRET_NAME
