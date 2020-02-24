import sanitizeHtml from 'sanitize-html'

const sanitizationConfig = {
  allowedTags: ['p', 'h1', 'h2', 'h3', 'b', 'strong', 'i', 'a', 'blockquote', 'ol', 'ul', 'li'],
  allowedAttributes: {
    a: ['href', 'target', 'rel'],
  },
}

export const sanitizeInput = input => sanitizeHtml(input, sanitizationConfig)
