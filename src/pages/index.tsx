import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from 'components/templates/Layout';

// markup
const IndexPage = () => {
  const { t } = useTranslation();
  return (
    <main>
      <Layout>{t('title')}</Layout>
    </main>
  );
};

export default IndexPage;
