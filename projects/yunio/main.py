from mkdocs_table_reader_plugin.readers import *

def define_env(env):
    """
    This is the hook for the functions (new form)
    """
    for reader in READERS.values():
        env.macro(reader)