export default {
    "type": "document",
    "name": "pagenotfound",
    "title": "404",
    "fields": [
        {
            "type": "number",
            "name": "weight",
            "title": "Weight",
            "validation": Rule => Rule.integer()
        },
        {
            "type": "string",
            "name": "fragment",
            "title": "Fragment",
            "initialValue": "404",
            "validation": null
        },
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The title of the page.",
            "validation": null
        },
        {
            "type": "string",
            "name": "subtitle",
            "title": "Subtitle",
            "description": "The sub-title of the page.",
            "validation": null
        },
        {
            "type": "string",
            "name": "redirect_text",
            "title": "Content",
            "description": "Content of the page.",
            "validation": null
        },
        {
            "type": "string",
            "name": "button_text",
            "title": "Title",
            "description": "Title of the redirect button.",
            "validation": null
        },
        {
            "type": "string",
            "name": "redirect_url",
            "title": "Redirect URL",
            "description": "URL of the redirect button",
            "validation": null
        },
        {
            "type": "string",
            "name": "stackbit_url_path",
            "title": "404 URL Path",
            "description": "The URL path of this page relative to site root. For example, the site root page would be \"/\", and post page would be \"posts/new-post/\"",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "stackbit_dir",
            "title": "Pages directory",
            "description": "The directory where pages files are stored",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "exampleSite/content"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "page"
                ]
            }
        }
    ],
    "singleInstance": true,
    "preview": {
        "select": {
            "title": "title"
        }
    }
}