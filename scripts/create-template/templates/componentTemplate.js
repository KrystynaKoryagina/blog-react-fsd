const interfaceConst = 'interface';

module.exports = (componentName) => `
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/utils/classNames';
import styles from './${componentName}.module.scss';

${interfaceConst} ${componentName}Props {
    className?: string;
}

export const ${componentName} = memo(({className}: ${componentName}Props) => {
    const { t } = useTranslation();
    
    return (
        <div className={classNames(styles.${componentName}, [className])}></div>
    );
});`;
