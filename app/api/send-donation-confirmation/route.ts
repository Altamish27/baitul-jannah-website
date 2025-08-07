import { type NextRequest, NextResponse } from "next/server"

interface DonationData {
  name: string
  email: string
  phone: string
  paymentMethod: string
  message?: string
  language: string
}

export async function POST(request: NextRequest) {
  try {
    const data: DonationData = await request.json()

    // Admin contact info
    const adminEmail = "nurjannahcendikia@gmail.com"
    const adminWhatsApp = "082217184920"

    // Send thank you email from admin to donor
    const emailResult = await sendThankYouEmail(data, adminEmail)

    // Create WhatsApp message for admin to send to donor
    const whatsappResult = await createWhatsAppMessage(data, adminWhatsApp)

    return NextResponse.json({
      success: true,
      message: "Konfirmasi donasi berhasil diproses",
      emailSent: emailResult,
      whatsappMessage: whatsappResult,
      adminContact: {
        email: adminEmail,
        whatsapp: adminWhatsApp,
      },
    })
  } catch (error) {
    console.error("Error processing donation confirmation:", error)
    return NextResponse.json({ success: false, message: "Gagal memproses konfirmasi" }, { status: 500 })
  }
}

async function sendThankYouEmail(data: DonationData, fromEmail: string) {
  try {
    const isIndonesian = data.language === "id"

    const emailContent = isIndonesian
      ? `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9fafb; padding: 20px;">
        <div style="background: white; border-radius: 12px; padding: 30px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #059669; font-size: 28px; margin: 0; font-family: 'Georgia', serif;">🕌 Baitul Jannah</h1>
            <p style="color: #6b7280; margin: 5px 0 0 0;">Pesantren Gratis untuk Yatim Piatu</p>
          </div>

          <!-- Main Content -->
          <div style="background: linear-gradient(135deg, #059669, #047857); color: white; padding: 25px; border-radius: 8px; text-align: center; margin-bottom: 25px;">
            <h2 style="margin: 0 0 10px 0; font-size: 24px;">Jazakallahu Khairan!</h2>
            <p style="margin: 0; font-size: 16px; opacity: 0.9;">Terima kasih atas donasi Anda untuk anak-anak yatim</p>
          </div>

          <p style="color: #374151; line-height: 1.6; margin-bottom: 20px;">
            Assalamu'alaikum warahmatullahi wabarakatuh, <strong>${data.name}</strong>
          </p>
          
          <p style="color: #374151; line-height: 1.6; margin-bottom: 25px;">
            Alhamdulillahi rabbil alamiin, kami sangat bersyukur dan berterima kasih atas niat baik Anda untuk berdonasi kepada Pesantren Baitul Jannah. Semoga Allah SWT membalas kebaikan Anda dengan berlipat ganda dan menjadikan donasi ini sebagai amal jariyah yang terus mengalir pahalanya.
          </p>
          
          <!-- Donation Details -->
          <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 20px; margin: 25px 0;">
            <h3 style="color: #059669; margin: 0 0 15px 0; font-size: 18px;">📋 Detail Donasi Anda:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #374151; font-weight: 600;">Nama Donatur:</td>
                <td style="padding: 8px 0; color: #374151;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #374151; font-weight: 600;">Email:</td>
                <td style="padding: 8px 0; color: #374151;">${data.email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #374151; font-weight: 600;">No. Telepon:</td>
                <td style="padding: 8px 0; color: #374151;">${data.phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #374151; font-weight: 600;">Metode Pembayaran:</td>
                <td style="padding: 8px 0; color: #374151;">${data.paymentMethod}</td>
              </tr>
              ${
                data.message
                  ? `
              <tr>
                <td style="padding: 8px 0; color: #374151; font-weight: 600;">Pesan:</td>
                <td style="padding: 8px 0; color: #374151; font-style: italic;">"${data.message}"</td>
              </tr>
              `
                  : ""
              }
              <tr>
                <td style="padding: 8px 0; color: #374151; font-weight: 600;">Waktu:</td>
                <td style="padding: 8px 0; color: #374151;">${new Date().toLocaleString("id-ID", {
                  timeZone: "Asia/Jakarta",
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}</td>
              </tr>
            </table>
          </div>
          
          <!-- Next Steps -->
          <div style="background: #fef3c7; border: 1px solid #fbbf24; border-radius: 8px; padding: 20px; margin: 25px 0;">
            <h3 style="color: #d97706; margin: 0 0 15px 0; font-size: 18px;">📝 Langkah Selanjutnya:</h3>
            <ol style="color: #374151; line-height: 1.6; margin: 0; padding-left: 20px;">
              <li style="margin-bottom: 8px;">Silakan lakukan transfer sesuai metode pembayaran yang Anda pilih</li>
              <li style="margin-bottom: 8px;">Kirim bukti transfer ke WhatsApp kami: <strong>082217184920</strong></li>
              <li style="margin-bottom: 8px;">Tim kami akan mengkonfirmasi donasi Anda dalam 1x24 jam</li>
              <li>Anda akan menerima sertifikat donasi digital sebagai tanda terima kasih</li>
            </ol>
          </div>

          <!-- Contact Info -->
          <div style="background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 20px; margin: 25px 0;">
            <h3 style="color: #1d4ed8; margin: 0 0 15px 0; font-size: 18px;">📞 Hubungi Kami:</h3>
            <p style="color: #374151; margin: 5px 0;">
              <strong>WhatsApp:</strong> 082217184920<br>
              <strong>Email:</strong> nurjannahcendikia@gmail.com<br>
              <strong>Alamat:</strong> Jl. Pesantren No. 123, Desa Sukamaju, Kecamatan Cibadak, Kabupaten Sukabumi, Jawa Barat
            </p>
          </div>

          <!-- Doa -->
          <div style="text-align: center; background: #f3f4f6; border-radius: 8px; padding: 20px; margin: 25px 0;">
            <p style="color: #374151; font-style: italic; line-height: 1.6; margin: 0;">
              "Barangsiapa yang membantu kesulitan seorang mukmin, maka Allah akan membantu kesulitannya di dunia dan akhirat"<br>
              <small style="color: #6b7280;">(HR. Muslim)</small>
            </p>
          </div>

          <p style="color: #374151; line-height: 1.6; margin-bottom: 20px;">
            Semoga Allah SWT senantiasa memberikan keberkahan, kesehatan, dan kemudahan dalam segala urusan Anda. Aamiin ya rabbal alamiin.
          </p>
          
          <p style="color: #374151; line-height: 1.6;">
            Barakallahu fiikum,<br>
            <strong>Tim Pesantren Baitul Jannah</strong><br>
            <em>nurjannahcendikia@gmail.com</em>
          </p>
        </div>
        
        <!-- Footer -->
        <div style="text-align: center; margin-top: 20px;">
          <p style="color: #9ca3af; font-size: 12px; margin: 0;">
            Email ini dikirim otomatis dari sistem donasi Pesantren Baitul Jannah<br>
            Jika ada pertanyaan, silakan hubungi kami di WhatsApp: 082217184920
          </p>
        </div>
      </div>
    `
      : `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9fafb; padding: 20px;">
        <div style="background: white; border-radius: 12px; padding: 30px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #059669; font-size: 28px; margin: 0; font-family: 'Georgia', serif;">🕌 Baitul Jannah</h1>
            <p style="color: #6b7280; margin: 5px 0 0 0;">Free Islamic Boarding School for Orphans</p>
          </div>

          <!-- Main Content -->
          <div style="background: linear-gradient(135deg, #059669, #047857); color: white; padding: 25px; border-radius: 8px; text-align: center; margin-bottom: 25px;">
            <h2 style="margin: 0 0 10px 0; font-size: 24px;">Jazakallahu Khairan!</h2>
            <p style="margin: 0; font-size: 16px; opacity: 0.9;">Thank you for your donation to orphaned children</p>
          </div>

          <p style="color: #374151; line-height: 1.6; margin-bottom: 20px;">
            Assalamu'alaikum warahmatullahi wabarakatuh, <strong>${data.name}</strong>
          </p>
          
          <p style="color: #374151; line-height: 1.6; margin-bottom: 25px;">
            Alhamdulillahi rabbil alamiin, we are very grateful and thankful for your good intention to donate to Baitul Jannah Islamic Boarding School. May Allah SWT reward your kindness manifold and make this donation a continuous charity that keeps flowing its rewards.
          </p>
          
          <!-- Donation Details -->
          <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 20px; margin: 25px 0;">
            <h3 style="color: #059669; margin: 0 0 15px 0; font-size: 18px;">📋 Your Donation Details:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #374151; font-weight: 600;">Donor Name:</td>
                <td style="padding: 8px 0; color: #374151;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #374151; font-weight: 600;">Email:</td>
                <td style="padding: 8px 0; color: #374151;">${data.email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #374151; font-weight: 600;">Phone Number:</td>
                <td style="padding: 8px 0; color: #374151;">${data.phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #374151; font-weight: 600;">Payment Method:</td>
                <td style="padding: 8px 0; color: #374151;">${data.paymentMethod}</td>
              </tr>
              ${
                data.message
                  ? `
              <tr>
                <td style="padding: 8px 0; color: #374151; font-weight: 600;">Message:</td>
                <td style="padding: 8px 0; color: #374151; font-style: italic;">"${data.message}"</td>
              </tr>
              `
                  : ""
              }
              <tr>
                <td style="padding: 8px 0; color: #374151; font-weight: 600;">Time:</td>
                <td style="padding: 8px 0; color: #374151;">${new Date().toLocaleString("en-US", {
                  timeZone: "Asia/Jakarta",
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}</td>
              </tr>
            </table>
          </div>
          
          <!-- Next Steps -->
          <div style="background: #fef3c7; border: 1px solid #fbbf24; border-radius: 8px; padding: 20px; margin: 25px 0;">
            <h3 style="color: #d97706; margin: 0 0 15px 0; font-size: 18px;">📝 Next Steps:</h3>
            <ol style="color: #374151; line-height: 1.6; margin: 0; padding-left: 20px;">
              <li style="margin-bottom: 8px;">Please make the transfer according to your selected payment method</li>
              <li style="margin-bottom: 8px;">Send proof of transfer to our WhatsApp: <strong>082217184920</strong></li>
              <li style="margin-bottom: 8px;">Our team will confirm your donation within 24 hours</li>
              <li>You will receive a digital donation certificate as our appreciation</li>
            </ol>
          </div>

          <!-- Contact Info -->
          <div style="background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 20px; margin: 25px 0;">
            <h3 style="color: #1d4ed8; margin: 0 0 15px 0; font-size: 18px;">📞 Contact Us:</h3>
            <p style="color: #374151; margin: 5px 0;">
              <strong>WhatsApp:</strong> 082217184920<br>
              <strong>Email:</strong> nurjannahcendikia@gmail.com<br>
              <strong>Address:</strong> Jl. Pesantren No. 123, Desa Sukamaju, Kecamatan Cibadak, Kabupaten Sukabumi, West Java
            </p>
          </div>

          <!-- Prayer -->
          <div style="text-align: center; background: #f3f4f6; border-radius: 8px; padding: 20px; margin: 25px 0;">
            <p style="color: #374151; font-style: italic; line-height: 1.6; margin: 0;">
              "Whoever relieves a believer's distress, Allah will relieve his distress in this world and the next"<br>
              <small style="color: #6b7280;">(HR. Muslim)</small>
            </p>
          </div>

          <p style="color: #374151; line-height: 1.6; margin-bottom: 20px;">
            May Allah SWT always grant you blessings, health, and ease in all your affairs. Aamiin ya rabbal alamiin.
          </p>
          
          <p style="color: #374151; line-height: 1.6;">
            Barakallahu fiikum,<br>
            <strong>Baitul Jannah Islamic Boarding School Team</strong><br>
            <em>nurjannahcendikia@gmail.com</em>
          </p>
        </div>
        
        <!-- Footer -->
        <div style="text-align: center; margin-top: 20px;">
          <p style="color: #9ca3af; font-size: 12px; margin: 0;">
            This email is sent automatically from Baitul Jannah Islamic Boarding School donation system<br>
            If you have any questions, please contact us on WhatsApp: 082217184920
          </p>
        </div>
      </div>
    `

    console.log(`Thank you email would be sent from ${fromEmail} to ${data.email}`)
    console.log("Email content:", emailContent)

    return { success: true, content: emailContent }
  } catch (error) {
    console.error("Error creating thank you email:", error)
    return { success: false }
  }
}

async function createWhatsAppMessage(data: DonationData, adminWhatsApp: string) {
  try {
    const isIndonesian = data.language === "id"

    const thankYouMessage = isIndonesian
      ? `
🕌 *BAITUL JANNAH ISLAMIC BOARDING SCHOOL*

Assalamu'alaikum warahmatullahi wabarakatuh ${data.name} 🙏

*Jazakallahu Khairan!* 

Alhamdulillahi rabbil alamiin, terima kasih atas niat baik Anda untuk berdonasi kepada Pesantren Baitul Jannah. Semoga Allah SWT membalas kebaikan Anda dengan berlipat ganda.

📋 *Detail Donasi:*
👤 Nama: ${data.name}
📧 Email: ${data.email}
📱 HP: ${data.phone}
💳 Metode: ${data.paymentMethod}
${data.message ? `💬 Pesan: ${data.message}` : ""}
🕐 Waktu: ${new Date().toLocaleString("id-ID")}

📝 *Langkah Selanjutnya:*
1️⃣ Lakukan transfer sesuai metode yang dipilih
2️⃣ Kirim bukti transfer ke nomor ini
3️⃣ Tim kami akan konfirmasi dalam 1x24 jam
4️⃣ Anda akan terima sertifikat donasi digital

"Barangsiapa yang membantu kesulitan seorang mukmin, maka Allah akan membantu kesulitannya di dunia dan akhirat" (HR. Muslim)

Semoga Allah SWT senantiasa memberikan keberkahan dan kemudahan dalam segala urusan Anda. Aamiin ya rabbal alamiin.

Barakallahu fiikum 🤲
*Tim Pesantren Baitul Jannah*
      `.trim()
      : `
🕌 *BAITUL JANNAH ISLAMIC BOARDING SCHOOL*

Assalamu'alaikum warahmatullahi wabarakatuh ${data.name} 🙏

*Jazakallahu Khairan!* 

Alhamdulillahi rabbil alamiin, thank you for your good intention to donate to Baitul Jannah Islamic Boarding School. May Allah SWT reward your kindness manifold.

📋 *Donation Details:*
👤 Name: ${data.name}
📧 Email: ${data.email}
📱 Phone: ${data.phone}
💳 Method: ${data.paymentMethod}
${data.message ? `💬 Message: ${data.message}` : ""}
🕐 Time: ${new Date().toLocaleString("en-US")}

📝 *Next Steps:*
1️⃣ Make transfer according to selected method
2️⃣ Send proof of transfer to this number
3️⃣ Our team will confirm within 24 hours
4️⃣ You will receive digital donation certificate

"Whoever relieves a believer's distress, Allah will relieve his distress in this world and the next" (HR. Muslim)

May Allah SWT always grant you blessings and ease in all your affairs. Aamiin ya rabbal alamiin.

Barakallahu fiikum 🤲
*Baitul Jannah Islamic Boarding School Team*
      `.trim()

    // Create WhatsApp URL for admin to send to donor
    const whatsappUrl = `https://wa.me/${data.phone.replace(/\D/g, "")}?text=${encodeURIComponent(thankYouMessage)}`

    console.log(`WhatsApp message created for admin ${adminWhatsApp} to send to donor ${data.phone}`)
    console.log("WhatsApp URL:", whatsappUrl)

    return {
      success: true,
      message: thankYouMessage,
      url: whatsappUrl,
      donorPhone: data.phone,
      adminPhone: adminWhatsApp,
    }
  } catch (error) {
    console.error("Error creating WhatsApp message:", error)
    return { success: false }
  }
}
