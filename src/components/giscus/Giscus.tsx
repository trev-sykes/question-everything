import Giscus from '@giscus/react';

const GiscusComments: React.FC = () => (
    <div style={{ marginTop: '3rem' }}>
        <Giscus
            repo="trev-sykes/question-everything"
            repoId="R_kgDOPDkU2A"
            category="Announcements"
            categoryId="DIC_kwDOPDkU2M4CskHK"
            mapping="pathname"
            strict="0"
            reactionsEnabled="1"
            emitMetadata="1"
            inputPosition="top"
            theme="dark_protanopia"
            lang="en"
            loading="lazy"
        />
    </div>
);

export default GiscusComments;
