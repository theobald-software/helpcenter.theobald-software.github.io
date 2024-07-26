window.addEventListener('DOMContentLoaded', (event) => {
    // Get page metadata
    const pageTitle = document.title;
    const pageMeta = document.querySelector('meta[name="description"]');
    const metaDescription = pageMeta ? pageMeta.getAttribute('content') : '';
    const gitInfo = mkdocs_data['git-revision-date-localized'];

    // Check for image in page metadata
    let pageImage = [];
    const metaImages = document.querySelectorAll('meta[property="og:image"]');
    if (metaImages.length > 0) {
        metaImages.forEach(meta => pageImage.push(meta.getAttribute('content')));
    }

    // Construct JSON-LD script
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": pageTitle,
        "image": pageImage,
        "datePublished": gitInfo.creation_date,
        "dateModified": gitInfo.last_modified_date,
        "author": [{
            "@type": "Organization",
            "name": "Theobald Software GmbH",
            "url": "https://theobald-software.com/"
        }]
    };

    // Create script element
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd, null, 2);

    // Append script to head
    document.head.appendChild(script);
});
