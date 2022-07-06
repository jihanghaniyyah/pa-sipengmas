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
					url: '/admin/dashboard',
					// active: true,
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
					url: '/admin/dataprodi',
					active: true,
				},
				{
					name: 'Research Center',
					url: '/admin/researchcenter',
					active: true,
				},
				{
					name: 'Research Group',
					url: '/admin/researchgroup',
					active: true,
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
					url: '/admin/penawaranjudul',
					active: true,
				},
			],
		},
	],
};
