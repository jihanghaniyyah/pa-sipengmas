export const Data = {
	menus: [
		{
			header: true,
			name: 'Dashboard',
		},
		{
			dropdown: true,
			active: true,
			name: 'Dashboard',
			icon: 'fas fa-fire',
			children: [
				{
					name: 'Statistik Data',
					url: '/dashboard',
					// active: true
				},
			],
		},
		{
			header: true,
			name: 'Data',
		},
		{
			dropdown: true,

			name: 'Data Pengmas',
			icon: 'fas fa-columns',
			children: [
				{
					name: 'Program Studi',
					url: '/data/prodi',
				},
				{
					name: 'PT Dalam Negeri',
					url: '/data/ptdalamnegeri',
				},
				{
					name: 'PT Luar Negeri',
					url: '/data/ptluarnegeri',
				},
				{
					name: 'Penawaran Judul',
					url: '/data/penawaranjudul',
				},
			],
		},
	],
};
