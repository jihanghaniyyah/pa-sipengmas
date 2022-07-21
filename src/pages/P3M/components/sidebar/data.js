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
					url: '/mis116/admin/dashboard',
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
					url: '/mis116/admin/dataprodi',
					active: true,
				},
				{
					name: 'Research Center',
					url: '/mis116/admin/researchcenter',
					active: true,
				},
				{
					name: 'Research Group',
					url: '/mis116/admin/researchgroup',
					active: true,
				},
				{
					name: 'Mandiri',
					url: '/mis116/admin/mandiri',
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
					url: '/mis116/admin/penawaranjudul',
					active: true,
				},
			],
		},
	],
};
