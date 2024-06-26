/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        // These are all the locales you want to support in
        // your application
        locales: ['en-GB', 'sr'],
        // This is the default locale you want to be used when visiting
        // a non-locale prefixed path e.g. `/hello`
        defaultLocale: 'en-GB',
        // This is a list of locale domains and the default locale they
        // should handle (these are only required when setting up domain routing)
        // Note: subdomains must be included in the domain value to be matched e.g. "sr.example.com".
        domains: [
          {
            domain: 'example.com',
            defaultLocale: 'en-GB',
          },
          {
            domain: 'example.nl',
            defaultLocale: 'nl-NL',
          },
        ],
      },
}

module.exports = nextConfig
