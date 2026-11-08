"""Serializable demo records; these classes do not provide authentication."""

import json
from typing import Self


class _UserRecord:
	def __init__(self, username: str, password: str) -> None:
		self.username = username
		self.password = password

	def to_json(self) -> str:
		return json.dumps(self.__dict__)

	@classmethod
	def from_json(cls, json_str: str) -> Self:
		data = json.loads(json_str)
		return cls(**data)


class pearson(_UserRecord):
	"""Legacy person record name retained for compatibility."""


class cart(_UserRecord):
	"""Legacy cart record name retained for compatibility."""


class signIn(_UserRecord):
	"""Serializable sign-in form data; not a credential verifier."""


class signUp(_UserRecord):
	"""Serializable sign-up form data; not an account store."""
