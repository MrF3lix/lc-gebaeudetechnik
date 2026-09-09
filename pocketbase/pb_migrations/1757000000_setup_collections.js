/// <reference path="../pb_data/types.d.ts" />

// Creates the collections that back the public website's content.
// Read access is public (the site fetches them anonymously); writing is
// restricted to superusers, i.e. whoever logs into the /_/ admin UI.
migrate((app) => {
  const settings = new Collection({
    name: "settings",
    type: "base",
    listRule: "",
    viewRule: "",
    createRule: null,
    updateRule: null,
    deleteRule: null,
    fields: [
      { name: "hero_title", type: "text", required: true },
      { name: "hero_subtitle", type: "text", required: true },
      { name: "hero_text", type: "editor", required: true },
      { name: "hero_cta_email", type: "email", required: true },
      {
        name: "hero_image",
        type: "file",
        maxSelect: 1,
        maxSize: 8388608,
        mimeTypes: ["image/png", "image/jpeg", "image/webp"],
      },
      { name: "services_heading", type: "text", required: true },
      { name: "services_text", type: "editor", required: true },
      { name: "projects_heading", type: "text", required: true },
      { name: "projects_text", type: "editor", required: true },
      { name: "team_heading", type: "text", required: true },
      { name: "team_text", type: "editor", required: true },
      { name: "contact_company", type: "text", required: true },
      { name: "contact_address_line1", type: "text", required: true },
      { name: "contact_address_line2", type: "text", required: true },
      { name: "contact_phone", type: "text", required: true },
      { name: "contact_email", type: "email", required: true },
    ],
  });
  app.save(settings);

  const features = new Collection({
    name: "features",
    type: "base",
    listRule: "",
    viewRule: "",
    createRule: null,
    updateRule: null,
    deleteRule: null,
    fields: [
      { name: "title", type: "text", required: true },
      { name: "description", type: "editor", required: true },
      {
        name: "icon",
        type: "select",
        required: true,
        maxSelect: 1,
        values: ["fire", "wrench", "home-modern", "sun"],
      },
      { name: "order", type: "number" },
    ],
  });
  app.save(features);

  const projects = new Collection({
    name: "projects",
    type: "base",
    listRule: "",
    viewRule: "",
    createRule: null,
    updateRule: null,
    deleteRule: null,
    fields: [
      { name: "title", type: "text", required: true },
      { name: "description", type: "editor", required: true },
      {
        name: "image",
        type: "file",
        required: true,
        maxSelect: 1,
        maxSize: 8388608,
        mimeTypes: ["image/png", "image/jpeg", "image/webp"],
      },
      { name: "order", type: "number" },
    ],
  });
  app.save(projects);

  const teamMembers = new Collection({
    name: "team_members",
    type: "base",
    listRule: "",
    viewRule: "",
    createRule: null,
    updateRule: null,
    deleteRule: null,
    fields: [
      { name: "name", type: "text", required: true },
      { name: "position", type: "text", required: true },
      { name: "phone", type: "text", required: true },
      { name: "email", type: "email", required: true },
      { name: "description", type: "editor", required: true },
      {
        name: "image",
        type: "file",
        required: true,
        maxSelect: 1,
        maxSize: 8388608,
        mimeTypes: ["image/png", "image/jpeg", "image/webp"],
      },
      { name: "order", type: "number" },
    ],
  });
  app.save(teamMembers);
}, (app) => {
  for (const name of ["settings", "features", "projects", "team_members"]) {
    try {
      const collection = app.findCollectionByNameOrId(name);
      app.delete(collection);
    } catch (_) {
      // already gone
    }
  }
});
