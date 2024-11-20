const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            features: "Features",
            contact: "Contact"
        },
        hero: {
            title: "Discover Your Chronotype",
            subtitle: "Take the scientific MEQ (Morningness-Eveningness Questionnaire) to find out if you're a morning lark or a night owl",
            startButton: "Start Test"
        },
        features: {
            title: "Test Features",
            scientific: {
                title: "Scientifically Validated",
                desc: "Based on the standardized questionnaire developed by Horne and Östberg"
            },
            personalized: {
                title: "Personalized Insights",
                desc: "Get tailored recommendations for your optimal daily schedule"
            },
            practical: {
                title: "Practical Guidance",
                desc: "Learn how to optimize your daily routine for peak performance"
            }
        },
        test: {
            prevButton: "Previous",
            nextButton: "Next",
            questionPrefix: "Question",
            results: {
                title: "Test Results",
                score: "Your Score: ",
                typePrefix: "Your Chronotype: ",
                recommendations: "Recommendations:",
                recList: [
                    "Try to arrange your schedule according to your natural rhythm",
                    "Schedule important work during your peak energy hours",
                    "Maintain regular sleep habits, even on weekends",
                    "Pay attention to the effects of natural light on your biological rhythm"
                ],
                backHome: "Back to Home"
            }
        }
    },
    zh: {
        nav: {
            home: "首页",
            about: "关于",
            features: "特点",
            contact: "联系"
        },
        hero: {
            title: "探索您的生理时钟类型",
            subtitle: "参与科学的MEQ（晨昏类型问卷）测试，了解您是早起的云雀还是夜猫子",
            startButton: "开始测试"
        },
        features: {
            title: "测试特点",
            scientific: {
                title: "科学验证",
                desc: "基于Horne和Östberg开发的标准化问卷"
            },
            personalized: {
                title: "个性化见解",
                desc: "获取针对您最佳日程的定制建议"
            },
            practical: {
                title: "实用指导",
                desc: "学习如何优化您的日常作息以达到最佳表现"
            }
        },
        test: {
            prevButton: "上一题",
            nextButton: "下一题",
            questionPrefix: "问题",
            results: {
                title: "测试结果",
                score: "您的得分：",
                typePrefix: "您的时间类型：",
                recommendations: "建议：",
                recList: [
                    "尽量按照您的自然节律安排作息时间",
                    "重要工作和学习安排在您精力最充沛的时段",
                    "保持规律的作息习惯，即使在周末也尽量不要有太大变化",
                    "注意光照对生理节律的影响，合理利用自然光"
                ],
                backHome: "返回首页"
            }
        }
    }
};

// 完整的MEQ问题翻译
const questionTranslations = {
    en: [
        {
            question: "Considering your own natural rhythm, at what time would you prefer to wake up?",
            options: [
                "5:00 AM-6:30 AM",
                "6:30 AM-7:45 AM",
                "7:45 AM-9:45 AM",
                "9:45 AM-11:00 AM",
                "11:00 AM-12:00 PM"
            ]
        },
        {
            question: "Considering your own natural rhythm, at what time would you prefer to go to bed?",
            options: [
                "8:00 PM-9:00 PM",
                "9:00 PM-10:15 PM",
                "10:15 PM-12:30 AM",
                "12:30 AM-1:45 AM",
                "1:45 AM-3:00 AM"
            ]
        },
        {
            question: "If you have to get up at a specific time in the morning, do you need an alarm clock?",
            options: [
                "Not at all",
                "Rarely",
                "Often",
                "Always"
            ]
        },
        {
            question: "How easy do you find it to get up in the morning under normal circumstances?",
            options: [
                "Very easy",
                "Fairly easy",
                "Fairly difficult",
                "Very difficult"
            ]
        },
        {
            question: "How alert do you feel during the first half hour after waking up?",
            options: [
                "Very alert",
                "Fairly alert",
                "Fairly sluggish",
                "Very sluggish"
            ]
        },
        {
            question: "How is your appetite during the first half hour after waking up?",
            options: [
                "Very good",
                "Fairly good",
                "Fairly poor",
                "Very poor"
            ]
        },
        {
            question: "How tired do you feel during the first half hour after waking up?",
            options: [
                "Not at all tired",
                "Slightly tired",
                "Fairly tired",
                "Very tired"
            ]
        },
        {
            question: "When you have no commitments the next day, what time do you go to bed compared to your usual bedtime?",
            options: [
                "Seldom or never later",
                "Less than 1 hour later",
                "1-2 hours later",
                "More than 2 hours later"
            ]
        },
        {
            question: "You have decided to do physical exercise. A friend suggests doing this for one hour twice a week at 7:00-8:00 AM. How do you think you would perform?",
            options: [
                "Would be in good form",
                "Would be in reasonable form",
                "Would find it difficult",
                "Would find it very difficult"
            ]
        },
        {
            question: "At what time in the evening do you feel tired and need sleep?",
            options: [
                "8:00 PM-9:00 PM",
                "9:00 PM-10:15 PM",
                "10:15 PM-12:45 AM",
                "12:45 AM-2:00 AM",
                "2:00 AM-3:00 AM"
            ]
        },
        {
            question: "If you had to get up at 6:00 AM, what would it be like?",
            options: [
                "Very easy",
                "Fairly easy",
                "Fairly difficult",
                "Very difficult"
            ]
        },
        {
            question: "How long does it take you to become fully awake in the morning?",
            options: [
                "0-10 minutes",
                "11-20 minutes",
                "21-40 minutes",
                "More than 40 minutes"
            ]
        },
        {
            question: "Which one of these types do you consider yourself to be?",
            options: [
                "Definitely a morning type",
                "Rather more a morning type",
                "Rather more an evening type",
                "Definitely an evening type"
            ]
        }
    ],
    zh: [
        {
            question: "如果只考虑您感觉最舒服的作息规律，您会选择几点起床？",
            options: [
                "上午5:00-6:30",
                "上午6:30-7:45",
                "上午7:45-9:45",
                "上午9:45-11:00",
                "上午11:00-12:00"
            ]
        },
        // ... 保持现有的中文问题
    ]
};

// 添加结果类型的翻译
const chronotypeTranslations = {
    en: {
        "明显的早起型": {
            type: "Definitely Morning Type",
            description: "You are a typical 'lark', with peak energy in the morning. It's recommended to schedule important tasks in the morning hours."
        },
        "中等偏早起型": {
            type: "Moderately Morning Type",
            description: "You tend towards being a morning person but have some flexibility. Your best performance is likely in the morning hours."
        },
        "中间型": {
            type: "Intermediate Type",
            description: "You have a flexible sleep-wake pattern. Try to maintain regular sleep habits while adapting to your daily requirements."
        },
        "中等偏晚睡型": {
            type: "Moderately Evening Type",
            description: "You tend towards being an evening person. Your performance might be better in the afternoon and evening."
        },
        "明显的晚睡型": {
            type: "Definitely Evening Type",
            description: "You are a typical 'owl', with peak energy in the evening. Consider scheduling important work in the afternoon or evening."
        }
    },
    zh: {
        // ... 保持现有的中文描述不变 ...
    }
}; 