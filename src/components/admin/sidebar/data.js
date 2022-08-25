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
					url: '/mis116/dashboard',
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
					url: '/mis116/dashboard-prodi',
				},
				{
					name: 'Research Center',
					url: '/mis116/dashboard-researchcenter',
				},
				{
					name: 'Research Group',
					url: '/mis116/dashboard-researchgroup',
				},
				{
					name: 'Mandiri',
					url: '/mis116/dashboard-mandiri',
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
					url: '/mis116/dashboard-penawaranjudul',
				},
			],
		},
	],
};
