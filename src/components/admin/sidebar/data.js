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
					name: 'Research Center',
					url: '/data/researchcenter',
				},
				{
					name: 'Research Group',
					url: '/data/researchgroup',
				},
			],
		},
		{
			dropdown: true,
			name: 'Penawaran Judul',
			icon: 'fas fa-columns',
			children: [
				{
					name: 'Daftar Penawaran',
					url: '/data/penawaranjudul',
				},
			],
		},
	],
};
