import json
import math
import uuid
from datetime import datetime, timezone
from pathlib import Path


LISTINGS_FILE = Path(__file__).with_name("listings.json")
CATEGORIES = ("Shirts", "Jeans", "Jackets", "Dresses", "Shoes", "Accessories")
CONDITIONS = ("Like New", "Good", "Fair")


def ask_choice(prompt, choices):
    options = ", ".join(choices)
    while True:
        value = input(f"{prompt} ({options}): ").strip()
        if value in choices:
            return value
        print(f"Please choose one of: {options}.")


def ask_price():
    while True:
        try:
            price = float(input("Price (EGP): ").strip())
            if math.isfinite(price) and price > 0:
                return price
        except ValueError:
            pass
        print("Enter a price greater than zero.")


def main():
    print("Add a clothing listing")
    listing = {
        "id": f"listing-{uuid.uuid4().hex}",
        "createdAt": datetime.now(timezone.utc).isoformat(),
        "name": input("Item name: ").strip(),
        "cat": ask_choice("Category", CATEGORIES),
        "price": ask_price(),
        "cond": ask_choice("Condition", CONDITIONS),
        "size": input("Size: ").strip(),
        "brand": input("Brand (or leave blank): ").strip() or "Unbranded",
        "seller": input("Seller name: ").strip(),
        "desc": input("Description (optional): ").strip(),
    }

    if not listing["name"] or not listing["size"] or not listing["seller"]:
        raise SystemExit("Item name, size, and seller name are required.")

    try:
        listings = json.loads(LISTINGS_FILE.read_text(encoding="utf-8"))
    except FileNotFoundError:
        listings = []
    except json.JSONDecodeError as error:
        raise SystemExit(f"{LISTINGS_FILE.name} contains invalid JSON: {error}")

    if not isinstance(listings, list):
        raise SystemExit(f"{LISTINGS_FILE.name} must contain a JSON list.")

    listings.append(listing)
    LISTINGS_FILE.write_text(
        json.dumps(listings, indent=2, ensure_ascii=False) + "\n",
        encoding="utf-8",
    )
    print(f"Listing saved to {LISTINGS_FILE.name}. Refresh the Shop page to see it.")


if __name__ == "__main__":
    main()
