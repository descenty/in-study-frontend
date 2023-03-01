import type { ComponentType } from 'svelte';
import AboutCircleOutline from '~icons/mdi/about-circle-outline';

interface IPageInfo {
	label: string;
	description: string;
	href: string;
	icon: ComponentType;
}

export const additionalPages: IPageInfo[] = [
	{
		label: 'Обо мне',
		description:
			'AromiMir — это сообщество, где я, Ирина Рыжова, как врач, делюсь знанием и опытом с теми, кто разделяет мои ценности в сфере поддержания здорового и активного долголетия; знакомлю со своей онлайн-школой «AROMIMIR», показываю возможности обучения новой профессии для жизни',
		href: '/about',
		icon: AboutCircleOutline
	}
];
