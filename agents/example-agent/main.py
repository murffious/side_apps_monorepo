#!/usr/bin/env python3
"""
Example Python Agent

A simple agent demonstrating the monorepo structure for Python-based agents.
"""

import os
import sys
from datetime import datetime

# Try to load environment variables if dotenv is available
try:
    from dotenv import load_dotenv
    load_dotenv()
except ImportError:
    print("Note: python-dotenv not installed. Environment variables from shell will be used.")


class ExampleAgent:
    """A simple example agent."""

    def __init__(self, name="ExampleAgent"):
        self.name = name
        self.start_time = datetime.now()

    def run(self):
        """Execute the agent's main logic."""
        print(f"[{self.name}] Starting at {self.start_time.isoformat()}")
        print(f"[{self.name}] Python version: {sys.version}")
        print(f"[{self.name}] Working directory: {os.getcwd()}")

        # Example task
        self.process_data()

        print(f"[{self.name}] Completed successfully!")

    def process_data(self):
        """Process some example data."""
        data = {
            "timestamp": datetime.now().isoformat(),
            "status": "active",
            "items": [1, 2, 3, 4, 5],
        }

        print(f"[{self.name}] Processing data: {data}")

        # Simulate some processing
        total = sum(data["items"])
        print(f"[{self.name}] Total: {total}")

        return data


def main():
    """Main entry point."""
    agent = ExampleAgent()
    agent.run()


if __name__ == "__main__":
    main()
