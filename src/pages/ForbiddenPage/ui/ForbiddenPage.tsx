import { memo } from 'react';
import { Page } from 'widgets/Page';

export const ForbiddenPage = () => {
	return (
		<Page>
			{'У вас нет доступа к этой странице'}
		</Page>
	);
};
