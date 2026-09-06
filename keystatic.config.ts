import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  singletons: {
    hero: singleton({
      label: 'Hero',
      path: 'src/content/site/hero',
      format: { data: 'json' },
      schema: {
        eyebrow: fields.text({ label: 'Eyebrow' }),
        lead: fields.text({ label: 'Lead', multiline: true }),
        ctaLabel: fields.text({ label: 'Primary button label' }),
        ctaHref: fields.text({ label: 'Primary button link' }),
      },
    }),
    quote: singleton({
      label: 'Quote',
      path: 'src/content/site/quote',
      format: { data: 'json' },
      schema: {
        text: fields.text({ label: 'Quote text', multiline: true }),
        attribution: fields.text({ label: 'Attribution name' }),
        work: fields.text({ label: 'Work / source title' }),
      },
    }),
    about: singleton({
      label: 'About',
      path: 'src/content/site/about',
      format: { data: 'json' },
      schema: {
        label: fields.text({ label: 'Section label' }),
        title: fields.text({ label: 'Title' }),
        lead: fields.text({ label: 'Lead', multiline: true }),
        items: fields.array(
          fields.object({
            label: fields.text({ label: 'Label' }),
            text: fields.text({ label: 'Text', multiline: true }),
          }),
          {
            label: 'Composition items',
            itemLabel: (props) => props.fields.label.value || 'Item',
          },
        ),
        startupLabel: fields.text({ label: 'Startup layer label' }),
        startupText: fields.text({ label: 'Startup layer text', multiline: true }),
      },
    }),
    projects: singleton({
      label: 'Projects',
      path: 'src/content/site/projects',
      format: { data: 'json' },
      schema: {
        label: fields.text({ label: 'Section label' }),
        title: fields.text({ label: 'Title' }),
        lead: fields.text({ label: 'Lead', multiline: true }),
        items: fields.array(
          fields.object({
            name: fields.text({ label: 'Name' }),
            text: fields.text({ label: 'Text', multiline: true }),
            href: fields.url({ label: 'URL', validation: { isRequired: false } }),
            logo: fields.text({ label: 'Logo path (optional)' }),
            logoAlt: fields.text({ label: 'Logo alt text' }),
          }),
          {
            label: 'Projects',
            itemLabel: (props) => props.fields.name.value || 'Project',
          },
        ),
      },
    }),
    services: singleton({
      label: 'Services',
      path: 'src/content/site/services',
      format: { data: 'json' },
      schema: {
        label: fields.text({ label: 'Section label' }),
        title: fields.text({ label: 'Title' }),
        lead: fields.text({ label: 'Lead', multiline: true }),
        items: fields.array(
          fields.object({
            title: fields.text({ label: 'Title' }),
            text: fields.text({ label: 'Text', multiline: true }),
          }),
          {
            label: 'Services',
            itemLabel: (props) => props.fields.title.value || 'Service',
          },
        ),
        payNote: fields.text({ label: 'Pay note (before Feed the Unicorn)' }),
      },
    }),
    eventsSection: singleton({
      label: 'Events section',
      path: 'src/content/site/events-section',
      format: { data: 'json' },
      schema: {
        label: fields.text({ label: 'Section label' }),
        title: fields.text({ label: 'Title' }),
        lead: fields.text({ label: 'Lead', multiline: true }),
      },
    }),
    grants: singleton({
      label: 'Grants',
      path: 'src/content/site/grants',
      format: { data: 'json' },
      schema: {
        label: fields.text({ label: 'Section label' }),
        title: fields.text({ label: 'Title' }),
        lead: fields.text({ label: 'Lead', multiline: true }),
        paragraphs: fields.array(fields.text({ label: 'Paragraph', multiline: true }), {
          label: 'Body paragraphs',
          itemLabel: (props) => props.value?.slice(0, 48) || 'Paragraph',
        }),
        primaryCtaLabel: fields.text({ label: 'Primary button label' }),
        primaryCtaHref: fields.text({ label: 'Primary button link' }),
        secondaryCtaLabel: fields.text({ label: 'Secondary button label' }),
        secondaryCtaHref: fields.text({ label: 'Secondary button link' }),
      },
    }),
    blogTeaser: singleton({
      label: 'Blog teaser',
      path: 'src/content/site/blog-teaser',
      format: { data: 'json' },
      schema: {
        label: fields.text({ label: 'Section label' }),
        title: fields.text({ label: 'Title' }),
        lead: fields.text({ label: 'Lead', multiline: true }),
        ctaLabel: fields.text({ label: 'Button label' }),
        ctaHref: fields.text({ label: 'Button link' }),
      },
    }),
    contact: singleton({
      label: 'Contact',
      path: 'src/content/site/contact',
      format: { data: 'json' },
      schema: {
        label: fields.text({ label: 'Section label' }),
        title: fields.text({ label: 'Title' }),
        lead: fields.text({ label: 'Lead', multiline: true }),
      },
    }),
    footer: singleton({
      label: 'Footer',
      path: 'src/content/site/footer',
      format: { data: 'json' },
      schema: {
        note: fields.text({ label: 'Note', multiline: true }),
      },
    }),
  },
  collections: {
    blog: collection({
      label: 'Blog',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        pubDate: fields.date({ label: 'Publish date' }),
        updatedDate: fields.date({ label: 'Updated date' }),
        draft: fields.checkbox({ label: 'Draft', defaultValue: false }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
    events: collection({
      label: 'Events',
      slugField: 'title',
      path: 'src/content/events/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.date({ label: 'Date' }),
        place: fields.text({ label: 'Place' }),
        link: fields.text({ label: 'Link (optional)' }),
        description: fields.text({ label: 'Description', multiline: true }),
      },
    }),
  },
});
