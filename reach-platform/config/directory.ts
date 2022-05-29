const DIRECTORY_LIST = [
    {
        'id': 1,
        'bname': 'hot',
        'title': '数据中台',
        'icon': 'compass',
        'status': 1,
        'children': [
            {
                'id': 2,
                'title': '数据列表',
                'url': '',
                'status': 1,
                'children': [
                    {
                        'id': 3,
                        'title': '热点列表',
                        'url': 'eventList',
                        'status': 1
                    },
                    {
                        'id': 4,
                        'title': '热榜列表',
                        'url': 'hotTop',
                        'status': 1
                    },
                ],
            },
            {
                'id': 5,
                'title': '模版管理',
                'url': 'headCard',
                'status': 3
            },
            {
                'id': 6,
                'title': '自定义表单管理',
                'status': 3,
                'url': '',
                'children': [
                    {
                        'id': 7,
                        'title': '组件配置表单',
                        'url': 'customForm',
                        'status': 3
                    },
                ]
            },
            {
                'id': 9,
                'title': '类目管理',
                'url': 'category',
                'status': 3
            },
        ]
    },
    {
        'id': 23,
        'title': '权限中心',
        'url': '',
        'icon': 'compass',
        'bid': 1,
        'pid': 1,
        'status': 3,
        'children': [
            {
                'id': 24,
                'title': '我的业务管理',
                'url': 'businessManage',
                'bid': 1,
                'pid': 1,
                'status': 9
            },
            {
                'id': 25,
                'title': '数据中心',
                'url': '',
                'bid': 2,
                'pid': 2,
                'status': 3,
                'children': [
                    {
                        'id': 27,
                        'title': '接口管理',
                        'url': 'interfaceManage',
                        'bid': 2,
                        'pid': 2,
                        'status': 3
                    },
                    {
                        'id': 28,
                        'title': '用户管理',
                        'url': 'businessuserManage',
                        'bid': 2,
                        'pid': 2,
                        'status': 3
                    },
                    {
                        'id': 29,
                        'title': '团队管理',
                        'url': 'teamManage',
                        'bid': 2,
                        'pid': 2,
                        'status': 3
                    },
                ]
            }
        ],
    },
];

export default DIRECTORY_LIST;