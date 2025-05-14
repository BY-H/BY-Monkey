{
	type: "if-statement",
	condition: {
		type: "operator-expression",
		operator: ">",
		left: {
			type: "operator-expression",
			operator: "*",
			left: {
				type: "integer-literal",
				value: 3
			},
			right: {
				type: "integer-literal",
				value: 6
			}
		},
		right: {
			type: "integer-literal",
			value: 10
		}
	},
	consequence: {
		type: "return-statement",
		returnValue: {
			type: "string-literal",
			value: "Hello"
		}
	},
	alternative: {
		type: "return-statement",
		returnValue: {
			type: "string-literal",
			value: "Goodbye"
		}
	}
}