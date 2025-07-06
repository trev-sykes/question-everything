// components/GiscusComments.tsx
import Giscus from '@giscus/react';
import React from 'react';

const GiscusComments: React.FC = () => {
    return (
        <div style={{ marginTop: '3rem' }}>
            <Giscus
                repo="yourusername/yourrepo" // Replace with your GitHub repo
                repoId="YOUR_REPO_ID" // From giscus.app
                category="Blog Comments" // Must match exactly
                categoryId="YOUR_CATEGORY_ID" // From giscus.app
                mapping="pathname"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="bottom"
                theme="light"
                lang="en"
                loading="lazy"
            />
        </div>
    );
};

export default GiscusComments;
