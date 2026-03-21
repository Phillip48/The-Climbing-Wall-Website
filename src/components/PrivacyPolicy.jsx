import styles from './PrivacyPolicy.module.css'

const LAST_UPDATED = 'March 21, 2026'
const CONTACT_EMAIL = 'theclimbingwall.app@gmail.com'

const sections = [
  {
    id: 'overview',
    title: '1. Overview',
    content: `The Climbing Wall ("we," "our," or "us") is a mobile application built to help climbers track their projects, sends, and progress. We are committed to protecting your privacy. This Privacy Policy explains what information we collect, how we use it, and your rights regarding that information.

By using The Climbing Wall, you agree to the practices described in this policy.`,
  },
  {
    id: 'data-collected',
    title: '2. Information We Collect',
    subsections: [
      {
        title: 'Information You Provide',
        content: `We collect information that you voluntarily enter into the app, including:
• Climbing project details (title, grade, attempts, sessions, notes)
• Send records (title, grade, attempts, wall type, notes)
• Diary entries and session notes
• Profile information (display name)`,
      },
      {
        title: 'Information Stored Locally',
        content: `All data you enter is stored locally on your device. The Climbing Wall does not transmit your climbing data to any external server or third party. Your data stays on your device unless you explicitly use the Backup or Restore features.`,
      },
      {
        title: 'Information We Do Not Collect',
        content: `We do not collect:
• Your real name, email address, or contact information
• Location data or GPS coordinates
• Device identifiers or advertising IDs
• Financial or payment information
• Biometric data`,
      },
    ],
  },
  {
    id: 'permissions',
    title: '3. Permissions We Request',
    content: `The Climbing Wall may request the following device permissions:`,
    subsections: [
      {
        title: 'Storage / Media Access',
        content: `Used to allow you to attach photos or images to your climbing projects and sends, and to save Backup files to your device. We do not access any files beyond what you explicitly select.`,
      },
      {
        title: 'Camera (if applicable)',
        content: `If enabled in a future update, camera access would be used solely for capturing photos you choose to attach to your entries. Photos are stored locally on your device only.`,
      },
    ],
    footer: `We only request permissions that are necessary for core app functionality. You can review and revoke permissions at any time in your device Settings.`,
  },
  {
    id: 'data-use',
    title: '4. How We Use Your Information',
    content: `All information you enter into The Climbing Wall is used exclusively to provide the app's core features:
• Displaying your projects, sends, and diary entries
• Calculating your stats (total sends, max grades, attempts)
• Generating your calendar heatmap and grade graphs
• Enabling Backup and Restore of your data

We do not use your data for advertising, profiling, or any purpose beyond operating the app on your device.`,
  },
  {
    id: 'data-sharing',
    title: '5. Data Sharing and Disclosure',
    content: `We do not sell, rent, trade, or share your personal information with any third parties.

Your data is never:
• Sold to advertisers or data brokers
• Shared with analytics services
• Transmitted to our servers
• Used for targeted advertising

The only exception would be if required by law, such as in response to a valid legal process — though given that all data is stored locally on your device, we do not have access to it in the first place.`,
  },
  {
    id: 'data-safety',
    title: '6. Data Safety',
    subsections: [
      {
        title: 'Local Storage',
        content: `All climbing data is stored locally on your device using your device's built-in storage. It is not transmitted over the internet and is subject to your device's own security protections (lock screen, encryption, etc.).`,
      },
      {
        title: 'Backup & Restore',
        content: `The Backup feature allows you to export your data to a file on your device. The Restore feature allows you to reimport a previously created backup file. This process happens entirely on your device — no data passes through our systems.`,
      },
      {
        title: 'Data Retention',
        content: `Your data exists for as long as the app is installed on your device. Uninstalling the app will remove all locally stored data. We recommend using the Backup feature before uninstalling.`,
      },
    ],
  },
  {
    id: 'children',
    title: '7. Children\'s Privacy',
    content: `The Climbing Wall is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will take appropriate steps to remove that information.`,
  },
  {
    id: 'your-rights',
    title: '8. Your Rights',
    content: `Because all data is stored locally on your device, you have full control over it at all times. You can:
• View, edit, or delete any entry directly within the app
• Export all your data using the Backup feature
• Delete all app data by uninstalling the application
• Revoke any app permissions via your device Settings

If you are located in the European Economic Area (EEA), California, or another region with applicable privacy laws, you may have additional rights. Please contact us if you have questions about exercising your rights.`,
  },
  {
    id: 'third-party',
    title: '9. Third-Party Services',
    content: `The Climbing Wall does not integrate with any third-party analytics, advertising, or tracking services. The app does not contain ads.

The app is distributed through the Google Play Store, which has its own Privacy Policy and Terms of Service that apply to your use of that platform. Please review Google's privacy practices at https://policies.google.com/privacy.`,
  },
  {
    id: 'changes',
    title: '10. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. When we do, we will update the "Last Updated" date at the top of this page. We encourage you to review this policy periodically. Continued use of the app after any changes constitutes your acceptance of the updated policy.`,
  },
  {
    id: 'contact',
    title: '11. Contact Us',
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or your data, please contact us at:`,
    isContact: true,
  },
]

export default function PrivacyPolicy({ onBack }) {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>

        {/* Back button */}
        <button className={styles.back} onClick={onBack} aria-label="Back to home">
          ← Back
        </button>

        {/* Header */}
        <header className={styles.header}>
          <p className={styles.eyebrow}>Legal</p>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.meta}>
            <span>The Climbing Wall</span>
            <span className={styles.dot}>·</span>
            <span>Last updated: {LAST_UPDATED}</span>
          </p>
          <p className={styles.intro}>
            Your privacy matters. This policy explains exactly what data The Climbing Wall
            collects, how it is used, and how it is protected — in plain language.
          </p>
        </header>

        {/* Table of contents */}
        <nav className={styles.toc} aria-label="Table of contents">
          <p className={styles.tocLabel}>Contents</p>
          <ul>
            {sections.map(({ id, title }) => (
              <li key={id}>
                <a href={`#${id}`} className={styles.tocLink}>{title}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sections */}
        <div className={styles.sections}>
          {sections.map(({ id, title, content, subsections, footer, isContact }) => (
            <section key={id} id={id} className={styles.section}>
              <h2 className={styles.sectionTitle}>{title}</h2>

              {content && !isContact && (
                <p className={styles.body}>{content}</p>
              )}

              {subsections && subsections.map(({ title: subTitle, content: subContent }) => (
                <div key={subTitle} className={styles.subsection}>
                  <h3 className={styles.subTitle}>{subTitle}</h3>
                  <p className={styles.body}>{subContent}</p>
                </div>
              ))}

              {footer && (
                <p className={`${styles.body} ${styles.footer}`}>{footer}</p>
              )}

              {isContact && (
                <div className={styles.contactCard}>
                  <p className={styles.body}>{content}</p>
                  <a href={`mailto:${CONTACT_EMAIL}`} className={styles.email}>
                    {CONTACT_EMAIL}
                  </a>
                  <p className={styles.body} style={{ marginTop: '1rem' }}>
                    We will respond to all inquiries within a reasonable timeframe.
                  </p>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Footer note */}
        <div className={styles.pageFooter}>
          <p>© {new Date().getFullYear()} The Climbing Wall · Built by Phillip Pereira</p>
          <button className={styles.back} onClick={onBack}>← Back to Home</button>
        </div>
      </div>
    </div>
  )
}
